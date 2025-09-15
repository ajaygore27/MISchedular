#!/bin/bash

# Enhanced Mock Interview Scheduler - Deployment Script

echo "🚀 Starting deployment of Mock Interview Scheduler..."

# Check if Firebase CLI is installed
if ! command -v firebase &> /dev/null; then
    echo "❌ Firebase CLI is not installed. Please install it first:"
    echo "npm install -g firebase-tools"
    exit 1
fi

# Check if user is logged in to Firebase
if ! firebase projects:list &> /dev/null; then
    echo "🔐 Please login to Firebase first:"
    firebase login
fi

# Initialize Firebase project if not already done
if [ ! -f ".firebaserc" ]; then
    echo "📋 Initializing Firebase project..."
    firebase init hosting
fi

# Build and deploy
echo "📦 Building and deploying..."

# Deploy to Firebase Hosting
firebase deploy --only hosting

echo "✅ Deployment completed successfully!"
echo "🌐 Your app should be available at: https://your-project-id.web.app"
echo ""
echo "📝 Next steps:"
echo "1. Update Firebase configuration in index.html"
echo "2. Set up admin users in Firestore"
echo "3. Configure security rules"
echo "4. Test the application"
