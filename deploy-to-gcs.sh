#!/bin/bash

# Ringo Website Deployment Script for Google Cloud Storage
# Replace YOUR_DOMAIN_COM with your actual domain

DOMAIN="ringoesim.com"
BUCKET_NAME="gs://$DOMAIN"

echo "🚀 Deploying Ringo website to Google Cloud Storage..."

# Check if gsutil is installed
if ! command -v gsutil &> /dev/null; then
    echo "❌ Google Cloud SDK not found. Please install it first."
    echo "Visit: https://cloud.google.com/sdk/docs/install"
    exit 1
fi

# Create bucket if it doesn't exist
echo "📦 Creating storage bucket..."
gsutil mb $BUCKET_NAME 2>/dev/null || echo "Bucket already exists"

# Configure bucket for website hosting
echo "🌐 Configuring bucket for website hosting..."
gsutil web set -m index.html -e index.html $BUCKET_NAME

# Make bucket publicly readable
echo "🔓 Making bucket publicly readable..."
gsutil iam ch allUsers:objectViewer $BUCKET_NAME

# Upload files
echo "📤 Uploading website files..."
gsutil -m cp -r * $BUCKET_NAME

# Set proper content types
echo "🏷️ Setting content types..."
gsutil -m setmeta -h "Content-Type:text/html" $BUCKET_NAME/*.html
gsutil -m setmeta -h "Content-Type:text/css" $BUCKET_NAME/assets/*.css
gsutil -m setmeta -h "Content-Type:application/javascript" $BUCKET_NAME/assets/*.js
gsutil -m setmeta -h "Content-Type:image/x-icon" $BUCKET_NAME/*.ico
gsutil -m setmeta -h "Content-Type:image/svg+xml" $BUCKET_NAME/*.svg

# Set cache control
echo "⚡ Setting cache control..."
gsutil -m setmeta -h "Cache-Control:public, max-age=31536000" $BUCKET_NAME/assets/*
gsutil -m setmeta -h "Cache-Control:public, max-age=3600" $BUCKET_NAME/*.html

echo "✅ Deployment complete!"
echo "🌐 Your website should be available at: https://$DOMAIN"
echo ""
echo "📋 Next steps:"
echo "1. Configure Cloudflare DNS to point to c.storage.googleapis.com"
echo "2. Set up SSL/TLS in Cloudflare"
echo "3. Test your website"