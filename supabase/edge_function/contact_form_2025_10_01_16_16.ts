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

  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ success: false, error: 'Method not allowed' }),
      { status: 405, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { name, email, subject, message } = await req.json();

    // Validate required fields
    if (!email || !subject || !message) {
      return new Response(
        JSON.stringify({ success: false, error: 'Email, subject, and message are required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ success: false, error: 'Invalid email format' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Validate name if provided
    if (name && (name.length < 2 || name.length > 100)) {
      return new Response(
        JSON.stringify({ success: false, error: 'Name must be between 2 and 100 characters' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Validate name format (letters, spaces, hyphens, apostrophes only)
    if (name && !/^[a-zA-ZÀ-ÿ\u0100-\u017F\u0180-\u024F\u1E00-\u1EFF\s\-'\.]+$/.test(name)) {
      return new Response(
        JSON.stringify({ success: false, error: 'Name can only contain letters, spaces, hyphens, and apostrophes' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Validate subject length
    if (subject.length < 5 || subject.length > 200) {
      return new Response(
        JSON.stringify({ success: false, error: 'Subject must be between 5 and 200 characters' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Validate message length
    if (message.length < 10 || message.length > 1000) {
      return new Response(
        JSON.stringify({ success: false, error: 'Message must be between 10 and 1000 characters' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Strip HTML tags from message for security
    const cleanMessage = message.replace(/<[^>]*>/g, '');

    // Insert contact submission into database
    const { error: insertError } = await supabase
      .from('contact_submissions_2025_10_01_16_16')
      .insert({
        name: name?.trim() || null,
        email: email.trim().toLowerCase(),
        subject: subject.trim(),
        message: cleanMessage.trim(),
        ip_address: req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip'),
        user_agent: req.headers.get('user-agent'),
        status: 'new'
      });

    if (insertError) {
      console.error('Database insert error:', insertError);
      throw new Error('Failed to save contact submission');
    }

    // Send notification email to admin
    try {
      await fetch(`${supabaseUrl}/functions/v1/send_email_2025_10_01_16_16`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${supabaseServiceKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'contact_notification',
          email: Deno.env.get('RESEND_ADMIN_EMAIL') || 'info@ringoesim.com',
          data: {
            name: name || 'Anonymous',
            email: email,
            subject: subject,
            message: cleanMessage
          }
        })
      });
    } catch (emailError) {
      console.error('Failed to send notification email:', emailError);
      // Don't fail the request if email fails - the submission is still saved
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Thank you for your message! We\'ll get back to you within 2-3 business days.' 
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: 'Internal server error. Please try again later.' 
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