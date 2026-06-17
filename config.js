// ============================================================
// BLOODLINE — Firebase Config
// Edit this file once; all pages share it automatically.
// Go to: https://console.firebase.google.com
// Create a project → Add Web App → Copy config below
// ============================================================

const FIREBASE_CONFIG = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// ============================================================
// SETUP INSTRUCTIONS:
// 1. Go to https://console.firebase.google.com
// 2. Create new project called "bloodline"
// 3. Enable Firestore Database (start in test mode)
// 4. Go to Project Settings > Your Apps > Add Web App
// 5. Copy the firebaseConfig object values above
// 6. In Firestore, manually create a "users" collection:
//    Document ID = their handle (lowercase, e.g. "ghost")
//    Fields:
//      pin: "1234"          (string - their access code)
//      role: "boss"         (string - "boss" or "crew")
//      displayName: "Ghost" (string - shown in UI)
// ============================================================
