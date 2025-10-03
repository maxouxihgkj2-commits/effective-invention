#!/bin/bash

# Navigate to the project directory
cd "$(dirname "$0")/.."

# Build the Next.js application
npm run build

# Deploy to Vercel
vercel --prod --confirm

# Optionally, you can add commands to restart your server if using a VPS
# For example, if using PM2:
# pm2 restart silent-smp

echo "Deployment completed successfully!"