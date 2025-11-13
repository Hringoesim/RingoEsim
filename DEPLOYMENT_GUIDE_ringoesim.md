# Ringo eSIM Website Deployment Guide

# Domain: ringoesim.com

## 🚀 Complete Setup for ringoesim.com

### Step 1: Google Cloud Setup

```bash
# Install Google Cloud CLI (if not already installed)
# Windows: Download from https://cloud.google.com/sdk/docs/install
# macOS: brew install google-cloud-sdk
# Linux: curl https://sdk.cloud.google.com | bash

# Login and initialize
gcloud init

# Create project (optional - you can use existing)
gcloud projects create ringoesim-website --name="Ringo eSIM Website"
gcloud config set project ringoesim-website

# Enable required APIs
gcloud services enable storage-api.googleapis.com
```

### Step 2: Create Storage Bucket

```bash
# Create bucket for ringoesim.com
gsutil mb gs://ringoesim.com

# Configure for website hosting
gsutil web set -m index.html -e index.html gs://ringoesim.com

# Make publicly readable
gsutil iam ch allUsers:objectViewer gs://ringoesim.com
```

### Step 3: Upload Website Files

```bash
# Navigate to your website files (download from ringo/dist folder)
cd /path/to/your/website/files

# Upload all files
gsutil -m cp -r * gs://ringoesim.com

# Set proper content types
gsutil -m setmeta -h "Content-Type:text/html" gs://ringoesim.com/*.html
gsutil -m setmeta -h "Content-Type:text/css" gs://ringoesim.com/assets/*.css
gsutil -m setmeta -h "Content-Type:application/javascript" gs://ringoesim.com/assets/*.js
gsutil -m setmeta -h "Content-Type:image/x-icon" gs://ringoesim.com/*.ico
gsutil -m setmeta -h "Content-Type:image/svg+xml" gs://ringoesim.com/*.svg

# Set cache headers for performance
gsutil -m setmeta -h "Cache-Control:public, max-age=31536000" gs://ringoesim.com/assets/*
gsutil -m setmeta -h "Cache-Control:public, max-age=3600" gs://ringoesim.com/*.html
```

### Step 4: Cloudflare DNS Configuration

In your Cloudflare dashboard for ringoesim.com:

**Delete existing records and add these:**

```
Type: CNAME
Name: www
Content: c.storage.googleapis.com
Proxy Status: Proxied (orange cloud)

Type: CNAME
Name: @
Content: ringoesim.com.storage.googleapis.com
Proxy Status: Proxied (orange cloud)
```

### Step 5: Cloudflare Settings

**SSL/TLS:**

- Encryption mode: Full (strict)
- Always Use HTTPS: On
- Minimum TLS Version: 1.2
- Automatic HTTPS Rewrites: On

**Speed:**

- Auto Minify: CSS ✓, JavaScript ✓, HTML ✓
- Brotli: On
- Rocket Loader: Off (important for React)

**Caching:**

- Browser Cache TTL: 4 hours
- Always Online: On

### Step 6: Page Rules for React Router

Add these page rules in Cloudflare:

**Rule 1: Static Assets Caching**

```
URL: ringoesim.com/assets/*
Settings:
- Cache Level: Cache Everything
- Edge Cache TTL: 1 month
- Browser Cache TTL: 1 month
```

**Rule 2: HTML Files**

```
URL: ringoesim.com/*
Settings:
- Cache Level: Standard
- Browser Cache TTL: 2 hours
```

### Step 7: Update Supabase CORS Settings

In your Supabase project dashboard:

1. Go to Settings → API
2. Add these URLs to CORS origins:
   - https://ringoesim.com
   - https://www.ringoesim.com

### Step 8: Test Your Website

After DNS propagation (5-30 minutes):

- Visit https://ringoesim.com
- Test all pages and navigation
- Test waitlist signup form
- Test contact form
- Test device compatibility checker
- Verify mobile responsiveness

## 🔧 Troubleshooting

**If website doesn't load:**

- Check DNS propagation: https://dnschecker.org
- Verify bucket permissions: `gsutil iam get gs://ringoesim.com`
- Check Cloudflare SSL settings

**If forms don't work:**

- Verify Supabase CORS settings include your domain
- Check browser console for errors
- Test Supabase connection

**If routing doesn't work:**

- Verify page rules are set correctly
- Check that index.html is set as main page

## 📊 Expected Costs

**Google Cloud Storage:**

- Storage: ~$0.02/month for small website
- Bandwidth: ~$0.12/GB (first 1GB free monthly)
- Operations: Minimal cost

**Cloudflare:**

- Free plan includes SSL, CDN, and basic features
- Pro plan ($20/month) adds advanced features

## 🎯 Final Checklist

- [ ] Google Cloud bucket created and configured
- [ ] Website files uploaded successfully
- [ ] Cloudflare DNS pointing to Google Cloud Storage
- [ ] SSL certificate active (green lock in browser)
- [ ] All website pages loading correctly
- [ ] Forms working (waitlist, contact)
- [ ] Mobile version responsive
- [ ] Supabase integration working
- [ ] Email functionality tested

Your Ringo eSIM website should now be live at https://ringoesim.com! 🎉
