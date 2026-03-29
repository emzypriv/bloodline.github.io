# 🩸 BLOODLINE — Crew Management System

A dark, tactical gang operations dashboard built for GitHub Pages + Firebase.

---

## 🚀 DEPLOYMENT — STEP BY STEP

### 1. Firebase Setup

1. Go to [https://console.firebase.google.com](https://console.firebase.google.com)
2. Click **"Create a project"** → name it `bloodline`
3. Disable Google Analytics (not needed) → **Create project**
4. In the left sidebar → **Firestore Database** → **Create database**
   - Choose **"Start in test mode"** (you can lock it down later)
   - Pick a region close to you (e.g. `europe-west2` for UK)
5. In left sidebar → **Project Settings** (gear icon) → **Your apps** → click **"Add app"** → Web (`</>`)
6. Register app name as `bloodline-web`
7. **Copy the `firebaseConfig` object** — you'll need the values below

### 2. Update Config File

Open `js/config.js` and replace the placeholder values:

```js
export const FIREBASE_CONFIG = {
  apiKey: "YOUR_REAL_API_KEY",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123:web:abc123"
};
```

### 3. Add Users to Firestore

In Firestore, manually create the **`users`** collection:

| Document ID | Field | Value |
|---|---|---|
| `ghost` | `pin` | `"1234"` |
| | `role` | `"boss"` |
| | `displayName` | `"Ghost"` |
| `shadow` | `pin` | `"5678"` |
| | `role` | `"crew"` |
| | `displayName` | `"Shadow"` |

- **Document ID** = their handle (lowercase, no spaces)
- **pin** = their access code (string, not number)
- **role** = either `"boss"` or `"crew"` (lowercase)
- **displayName** = shown in the UI

### 4. GitHub Pages Deployment

1. Create a new **GitHub repository** (e.g. `bloodline-dashboard`)
2. Make it **Private** (recommended for security)
3. Upload all files, keeping the folder structure:
   ```
   /index.html
   /css/style.css
   /js/config.js
   /pages/boss-dashboard.html
   /pages/crew-dashboard.html
   ```
4. Go to repo **Settings** → **Pages**
5. Under **Source**, select: `main` branch → `/ (root)` → **Save**
6. Your site will be live at: `https://yourusername.github.io/bloodline-dashboard/`

### 5. Firestore Security Rules (Optional but Recommended)

In Firestore → **Rules**, paste:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read: if true;  // login needs to read users
      allow write: if false; // only you can add users manually
    }
    match /{document=**} {
      allow read, write: if true; // tighten this later
    }
  }
}
```

---

## 📁 FILE STRUCTURE

```
bloodline/
├── index.html                  ← Login page
├── css/
│   └── style.css               ← All styles
├── js/
│   └── config.js               ← Firebase config (EDIT THIS)
└── pages/
    ├── boss-dashboard.html     ← Full access dashboard
    └── crew-dashboard.html     ← Crew-only dashboard
```

---

## 🔐 ACCESS LEVELS

| Role | Pages Accessible | Can Do |
|---|---|---|
| **BOSS** | All pages | Log jobs, manage recipes, view payouts, money cleaning, calendar |
| **CREW** | My Cuts, Calendar, Recipes, My Jobs | View own earnings, read calendar & recipes |

---

## 📊 FEATURES

| Feature | Boss | Crew |
|---|---|---|
| Overview Stats | ✅ | ❌ |
| Calendar (view) | ✅ | ✅ |
| Calendar (add events) | ✅ | ❌ |
| Recipe List (view) | ✅ | ✅ |
| Recipe List (add/delete) | ✅ | ❌ |
| Log a Job | ✅ | ❌ |
| All Job Records | ✅ | ❌ |
| My Jobs | N/A | ✅ |
| My Earnings | N/A | ✅ |
| Money Cleaning | ✅ | ❌ |
| Crew Payouts | ✅ | ❌ |

---

## 🛠 CUSTOMISATION

- **Job types**: Edit the `<option>` tags in the Job Form dropdown in `boss-dashboard.html`
- **Loot categories**: Edit the Take section of the Job Form
- **Recipe categories**: Edit the Category dropdown in the Recipe form
- **Crew slots**: Currently 6 — change the loop limit in the Job Form JS
- **Boss cut default**: Currently 30% — change the `value="30"` on the boss cut field
- **Colours**: All in `css/style.css` at the `:root` variables block

---

*BLOODLINE — Stay loyal. Stay quiet.*
