import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Authorization, X-Client-Info, apikey, Content-Type, X-Application-Name',
};

// Helper function to determine from email
function getFromEmail() {
  const domain = Deno.env.get('RESEND_DOMAIN');
  if (domain) {
    return `send@${domain}`;
  }
  return 'onboarding@resend.dev'; // Default fallback
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { type, email, data } = await req.json();
    const resendApiKey = Deno.env.get('RESEND_API_KEY');

    if (!resendApiKey) {
      throw new Error('RESEND_API_KEY not configured');
    }

    let emailSubject = '';
    let emailBody = '';

    switch (type) {
      case 'waitlist_verification':
        emailSubject = 'Verify your Ringo waitlist spot 🎉';
        emailBody = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #2563eb; font-size: 28px; margin: 0;">Ringo</h1>
              <p style="color: #64748b; margin: 5px 0;">One Number. One Plan. Everywhere.</p>
            </div>
            
            <h2 style="color: #1e293b;">Welcome to the Ringo Waitlist!</h2>
            
            <p>Hi ${data.firstName || 'there'},</p>
            
            <p>Thanks for joining the Ringo pilot program waitlist! Please verify your email address to secure your spot.</p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="${data.verificationUrl}" 
                 style="background-color: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">
                Verify Email Address
              </a>
            </div>
            
            <p><strong>What happens next:</strong></p>
            <ul style="color: #475569;">
              <li>You'll receive updates on our pilot development progress</li>
              <li>You'll get priority access when we launch</li>
              <li>Early members may receive special benefits</li>
            </ul>
            
            <p style="color: #64748b; font-size: 14px; margin-top: 30px;">
              This verification link expires in 24 hours. If you didn't sign up for Ringo, you can safely ignore this email.
            </p>
            
            <div style="border-top: 1px solid #e2e8f0; margin-top: 30px; padding-top: 20px; text-align: center; color: #64748b; font-size: 12px;">
              <p>The Ringo Team</p>
              <p>
                <a href="${data.unsubscribeUrl}" style="color: #64748b;">Unsubscribe</a> | 
                <a href="mailto:info@ringoesim.com" style="color: #64748b;">Contact Us</a>
              </p>
            </div>
          </div>
        `;
        break;

      case 'waitlist_welcome':
        emailSubject = 'You\'re on the Ringo waitlist! 🚀';
        emailBody = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #2563eb; font-size: 28px; margin: 0;">Ringo</h1>
              <p style="color: #64748b; margin: 5px 0;">One Number. One Plan. Everywhere.</p>
            </div>
            
            <h2 style="color: #1e293b;">Welcome to Ringo! 🎉</h2>
            
            <p>Hi ${data.firstName || 'there'},</p>
            
            <p>Your email has been verified and you're now officially on the Ringo pilot program waitlist!</p>
            
            <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1e293b; margin-top: 0;">What you can expect:</h3>
              <ul style="color: #475569; margin-bottom: 0;">
                <li>Regular updates on our development progress</li>
                <li>Priority access when we launch the pilot</li>
                <li>Direct input into product development</li>
                <li>Potential early-bird pricing and benefits</li>
              </ul>
            </div>
            
            <p>We're working hard to bring you seamless global connectivity using your existing phone number. Stay tuned for updates!</p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://ringo.com" 
                 style="background-color: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">
                Visit Ringo.com
              </a>
            </div>
            
            <div style="border-top: 1px solid #e2e8f0; margin-top: 30px; padding-top: 20px; text-align: center; color: #64748b; font-size: 12px;">
              <p>The Ringo Team</p>
              <p>
                <a href="${data.unsubscribeUrl}" style="color: #64748b;">Unsubscribe</a> | 
                <a href="mailto:info@ringoesim.com" style="color: #64748b;">Contact Us</a>
              </p>
            </div>
          </div>
        `;
        break;

      case 'contact_notification':
        emailSubject = `New contact form submission from ${data.name}`;
        emailBody = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #1e293b;">New Contact Form Submission</h2>
            
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${data.name}</p>
              <p><strong>Email:</strong> ${data.email}</p>
              <p><strong>Subject:</strong> ${data.subject}</p>
              <p><strong>Message:</strong></p>
              <div style="background-color: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
                ${data.message.replace(/\n/g, '<br>')}
              </div>
            </div>
            
            <p style="color: #64748b; font-size: 14px;">
              Submitted at: ${new Date().toLocaleString()}
            </p>
          </div>
        `;
        break;

      case 'password_reset':
        emailSubject = 'Reset your Ringo password';
        emailBody = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #2563eb; font-size: 28px; margin: 0;">Ringo</h1>
              <p style="color: #64748b; margin: 5px 0;">One Number. One Plan. Everywhere.</p>
            </div>
            
            <h2 style="color: #1e293b;">Reset Your Password</h2>
            
            <p>Hi ${data.firstName || 'there'},</p>
            
            <p>You requested to reset your Ringo account password. Click the button below to set a new password:</p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="${data.resetUrl}" 
                 style="background-color: #dc2626; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">
                Reset Password
              </a>
            </div>
            
            <p style="color: #64748b; font-size: 14px;">
              This reset link expires in 1 hour. If you didn't request this password reset, you can safely ignore this email.
            </p>
            
            <div style="border-top: 1px solid #e2e8f0; margin-top: 30px; padding-top: 20px; text-align: center; color: #64748b; font-size: 12px;">
              <p>The Ringo Team</p>
              <p><a href="mailto:info@ringoesim.com" style="color: #64748b;">Contact Us</a></p>
            </div>
          </div>
        `;
        break;

      default:
        throw new Error('Invalid email type');
    }

    // Send email via Resend API
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: getFromEmail(),
        to: type === 'contact_notification' ? Deno.env.get('RESEND_ADMIN_EMAIL') || 'info@ringoesim.com' : email,
        subject: emailSubject,
        html: emailBody,
        text: emailBody.replace(/<[^>]*>/g, '') // Strip HTML for text version
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Resend API error: ${response.status} ${response.statusText} - ${errorText}`);
    }

    const result = await response.json();
    
    return new Response(
      JSON.stringify({ 
        success: true, 
        message_id: result.id,
        message: 'Email sent successfully' 
      }),
      { 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    );

  } catch (error) {
    console.error('Email sending error:', error);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
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