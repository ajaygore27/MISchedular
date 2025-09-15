// Firebase Configuration for Mock Interview Scheduler
// Replace these values with your actual Firebase project configuration

const firebaseConfig = {
    apiKey: "YOUR_API_KEY_HERE",
    authDomain: "your-project-id.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-project-id.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Instructions to set up Firebase:
// 1. Go to https://console.firebase.google.com/
// 2. Create a new project or select existing one
// 3. Enable Authentication (Google sign-in)
// 4. Enable Firestore Database
// 5. Get your config from Project Settings > General > Your apps
// 6. Replace the values above with your actual config

// Firestore Security Rules (copy to Firebase Console > Firestore > Rules):
/*
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow authenticated users to read participants
    match /participants/{document} {
      allow read: if request.auth != null;
      allow write: if request.auth != null;
    }
    
    // Only admins can read admin collection
    match /admins/{document} {
      allow read: if request.auth != null;
      allow write: if false; // Only manually add admins
    }
  }
}
*/

// To add admin users:
// 1. Go to Firebase Console > Firestore Database
// 2. Create a collection called "admins"
// 3. Add documents with the email address as the document ID
// 4. Set any field (e.g., role: "admin") in the document

export default firebaseConfig;
