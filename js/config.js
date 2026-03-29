// ============================================================
// BLOODLINE — Firebase Config
// Replace these values with your own Firebase project config
// Go to: https://console.firebase.google.com
// Create a project → Add Web App → Copy config below
// ============================================================

  const firebaseConfig = {
    apiKey: "AIzaSyC6El4QT2--ecQNWV18e-4L4s26iol_eUk",
    authDomain: "bloodline-efc76.firebaseapp.com",
    projectId: "bloodline-efc76",
    storageBucket: "bloodline-efc76.firebasestorage.app",
    messagingSenderId: "97046048461",
    appId: "1:97046048461:web:e1bdc760f130fb72830384"
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
//      pin: "1234"         (string - their access code)
//      role: "boss"        (string - "boss" or "crew")
//      displayName: "Ghost" (string - shown in UI)
// ============================================================
