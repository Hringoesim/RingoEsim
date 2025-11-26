# Supabase Edge Functions Deployment Guide

## Prerequisites
- Supabase CLI installed (`npm install -g supabase`)
- Supabase account with a project created
- Resend API account (for sending emails)

## Step 1: Install Supabase CLI (if not already installed)
```bash
npm install -g supabase
```

## Step 2: Login to Supabase
```bash
supabase login
```

## Step 3: Link Your Project
```bash
cd /Users/hippolytevanmarcke/RingoV3\ proto/ringowebsitev4/ringowebsitev4/ringowebsitev3/RingoEsim
supabase link --project-ref YOUR_PROJECT_REF
```

To find your PROJECT_REF:
1. Go to https://supabase.com/dashboard
2. Select your project
3. Go to Settings > General
4. Copy the "Reference ID"

## Step 4: Set Environment Variables (Secrets)

You need to set these secrets in Supabase:

```bash
# Resend API Key (get from https://resend.com/api-keys)
supabase secrets set RESEND_API_KEY=re_xxxxxxxxxxxxx

# Your domain (optional, for custom from email)
supabase secrets set RESEND_DOMAIN=ringoesim.com

# Admin email for contact form notifications
supabase secrets set RESEND_ADMIN_EMAIL=info@ringoesim.com
```

## Step 5: Deploy Edge Functions

Deploy all three edge functions:

```bash
# Deploy contact form function
supabase functions deploy contact_form_2025_10_01_16_16 --project-ref YOUR_PROJECT_REF

# Deploy waitlist management function
supabase functions deploy waitlist_management_2025_10_01_16_16 --project-ref YOUR_PROJECT_REF

# Deploy email sending function
supabase functions deploy send_email_2025_10_01_16_16 --project-ref YOUR_PROJECT_REF
```

## Step 6: Verify Deployment

Check if functions are deployed:
```bash
supabase functions list
```

## Step 7: Test the Functions

### Test Contact Form:
```bash
curl -i --location --request POST 'https://YOUR_PROJECT_REF.supabase.co/functions/v1/contact_form_2025_10_01_16_16' \
  --header 'Authorization: Bearer YOUR_ANON_KEY' \
  --header 'Content-Type: application/json' \
  --data '{"name":"Test User","email":"test@example.com","subject":"Test Subject","message":"This is a test message"}'
```

### Test Waitlist:
```bash
curl -i --location --request POST 'https://YOUR_PROJECT_REF.supabase.co/functions/v1/waitlist_management_2025_10_01_16_16?action=signup' \
  --header 'Authorization: Bearer YOUR_ANON_KEY' \
  --header 'Content-Type: application/json' \
  --data '{"email":"test@example.com","firstName":"Test","lastName":"User","country":"US","referralSource":"Website"}'
```

## Troubleshooting

### If emails aren't sending:

1. **Check Resend API Key:**
   - Go to https://resend.com/api-keys
   - Make sure your API key is valid
   - Check if you've verified your domain in Resend

2. **Check Function Logs:**
   ```bash
   supabase functions logs contact_form_2025_10_01_16_16
   supabase functions logs send_email_2025_10_01_16_16
   ```

3. **Verify Environment Variables:**
   ```bash
   supabase secrets list
   ```

4. **Check Resend Domain:**
   - If using a custom domain, verify it in Resend dashboard
   - Otherwise, use the default `onboarding@resend.dev`

### Common Issues:

- **"RESEND_API_KEY not configured"**: Set the secret using `supabase secrets set`
- **"Invalid email format"**: Check email validation in the form
- **CORS errors**: Edge functions already have CORS configured
- **Function not found**: Make sure functions are deployed

## Alternative: Deploy via Supabase Dashboard

1. Go to https://supabase.com/dashboard
2. Select your project
3. Go to "Edge Functions" in the left sidebar
4. Click "Deploy new function"
5. Upload each function file
6. Set environment variables in "Settings" > "Edge Functions" > "Secrets"

## Resend Setup

1. Sign up at https://resend.com
2. Verify your domain (ringoesim.com) or use the default
3. Create an API key
4. Add the API key to Supabase secrets

## Email Templates

The following email types are configured:
- `waitlist_verification` - Sent when user joins waitlist
- `waitlist_welcome` - Sent after email verification
- `contact_notification` - Sent to info@ringoesim.com when contact form is submitted
- `password_reset` - For password reset requests

All emails are sent to **info@ringoesim.com** for contact form submissions.
