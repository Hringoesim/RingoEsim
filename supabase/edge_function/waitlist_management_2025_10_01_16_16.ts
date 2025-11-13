import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Authorization, X-Client-Info, apikey, Content-Type, X-Application-Name',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const url = new URL(req.url);
    const action = url.searchParams.get('action');

    if (req.method === 'POST' && action === 'signup') {
      const { email, firstName, lastName, country, referralSource } = await req.json();

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return new Response(
          JSON.stringify({ success: false, error: 'Invalid email format' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Check if email already exists
      const { data: existingUser, error: checkError } = await supabase
        .from('waitlist_2025_10_01_16_16')
        .select('email, email_verified')
        .eq('email', email)
        .single();

      if (existingUser) {
        if (existingUser.email_verified) {
          return new Response(
            JSON.stringify({ 
              success: false, 
              error: 'You\'re already on the waitlist! Check your email for updates.' 
            }),
            { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        } else {
          // Resend verification email
          const verificationToken = crypto.randomUUID();
          const unsubscribeToken = crypto.randomUUID();
          
          const { error: updateError } = await supabase
            .from('waitlist_2025_10_01_16_16')
            .update({
              verification_token: verificationToken,
              verification_sent_at: new Date().toISOString(),
              unsubscribe_token: unsubscribeToken
            })
            .eq('email', email);

          if (updateError) throw updateError;

          // Send verification email
          const verificationUrl = `${url.origin}/verify-email?token=${verificationToken}&email=${encodeURIComponent(email)}`;
          const unsubscribeUrl = `${url.origin}/unsubscribe?token=${unsubscribeToken}`;

          await fetch(`${supabaseUrl}/functions/v1/send_email_2025_10_01_16_16`, {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${supabaseServiceKey}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              type: 'waitlist_verification',
              email: email,
              data: {
                firstName: firstName,
                verificationUrl: verificationUrl,
                unsubscribeUrl: unsubscribeUrl
              }
            })
          });

          return new Response(
            JSON.stringify({ 
              success: true, 
              message: 'We\'ve resent your verification email. Please check your inbox.' 
            }),
            { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }
      }

      // Create new waitlist entry
      const verificationToken = crypto.randomUUID();
      const unsubscribeToken = crypto.randomUUID();
      
      const { error: insertError } = await supabase
        .from('waitlist_2025_10_01_16_16')
        .insert({
          email: email,
          first_name: firstName,
          last_name: lastName,
          country: country,
          referral_source: referralSource,
          verification_token: verificationToken,
          verification_sent_at: new Date().toISOString(),
          unsubscribe_token: unsubscribeToken,
          ip_address: req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip'),
          user_agent: req.headers.get('user-agent')
        });

      if (insertError) throw insertError;

      // Send verification email
      const verificationUrl = `${url.origin}/verify-email?token=${verificationToken}&email=${encodeURIComponent(email)}`;
      const unsubscribeUrl = `${url.origin}/unsubscribe?token=${unsubscribeToken}`;

      await fetch(`${supabaseUrl}/functions/v1/send_email_2025_10_01_16_16`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${supabaseServiceKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'waitlist_verification',
          email: email,
          data: {
            firstName: firstName,
            verificationUrl: verificationUrl,
            unsubscribeUrl: unsubscribeUrl
          }
        })
      });

      return new Response(
        JSON.stringify({ 
          success: true, 
          message: 'Success! Check your email to verify your waitlist spot.' 
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );

    } else if (req.method === 'POST' && action === 'verify') {
      const { token, email } = await req.json();

      // Find user with matching token and email
      const { data: user, error: findError } = await supabase
        .from('waitlist_2025_10_01_16_16')
        .select('*')
        .eq('verification_token', token)
        .eq('email', email)
        .single();

      if (findError || !user) {
        return new Response(
          JSON.stringify({ success: false, error: 'Invalid or expired verification link' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Check if token is expired (24 hours)
      const sentAt = new Date(user.verification_sent_at);
      const now = new Date();
      const hoursDiff = (now.getTime() - sentAt.getTime()) / (1000 * 60 * 60);

      if (hoursDiff > 24) {
        return new Response(
          JSON.stringify({ success: false, error: 'Verification link has expired. Please request a new one.' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Update user as verified
      const { error: updateError } = await supabase
        .from('waitlist_2025_10_01_16_16')
        .update({
          email_verified: true,
          verification_token: null
        })
        .eq('id', user.id);

      if (updateError) throw updateError;

      // Send welcome email
      const unsubscribeUrl = `${url.origin}/unsubscribe?token=${user.unsubscribe_token}`;

      await fetch(`${supabaseUrl}/functions/v1/send_email_2025_10_01_16_16`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${supabaseServiceKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'waitlist_welcome',
          email: user.email,
          data: {
            firstName: user.first_name,
            unsubscribeUrl: unsubscribeUrl
          }
        })
      });

      return new Response(
        JSON.stringify({ 
          success: true, 
          message: 'Email verified successfully! You\'re now on the Ringo waitlist.' 
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );

    } else if (req.method === 'POST' && action === 'unsubscribe') {
      const { token } = await req.json();

      // Find user with matching unsubscribe token
      const { data: user, error: findError } = await supabase
        .from('waitlist_2025_10_01_16_16')
        .select('*')
        .eq('unsubscribe_token', token)
        .single();

      if (findError || !user) {
        return new Response(
          JSON.stringify({ success: false, error: 'Invalid unsubscribe link' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Update user as unsubscribed
      const { error: updateError } = await supabase
        .from('waitlist_2025_10_01_16_16')
        .update({
          unsubscribed: true
        })
        .eq('id', user.id);

      if (updateError) throw updateError;

      return new Response(
        JSON.stringify({ 
          success: true, 
          message: 'You have been unsubscribed from the Ringo waitlist.' 
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );

    } else {
      return new Response(
        JSON.stringify({ success: false, error: 'Invalid action' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

  } catch (error) {
    console.error('Waitlist management error:', error);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: 'Internal server error' 
      }),
      { 
        status: 500,
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    );
  }
});