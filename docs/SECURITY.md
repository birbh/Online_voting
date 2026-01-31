# Security Implementation

## Admin Credentials(be sure to keep this confidential)

**Badge ID:** `2026`  
**Clear Key:** `CLEAR2026`

## Security Measures

### 1. SHA-256 Hashing
- Credentials are now hashed using SHA-256 before comparison
- Plain-text passwords are never stored in the code
- Hashes stored in code: harder to reverse-engineer (but not impossible)

### 2. Firebase Security Rules
Upload `firebase-rules.json` to your Firebase Console:

```bash
firebase deploy --only database
```

Or manually in Firebase Console → Realtime Database → Rules tab:

```json
{
  "rules": {
    ".read": true,
    ".write": false,
    "votes": {
      ".write": true
    },
    "feedback": {
      ".write": true
    },
    "admin": {
      ".read": "auth != null",
      ".write": "auth != null"
    }
  }
}
```

### 3. Recommended for Production

**Important:** Client-side authentication is NOT secure for production apps.

For production, implement:
1. **Firebase Authentication** (email/password, Google, etc.)
2. **Server-side API** with proper session management
3. **Environment variables** for sensitive config
4. **Rate limiting** to prevent brute-force attacks
5. **HTTPS only** with secure headers

### How It Works Now

1. User enters badge ID → hashed with SHA-256 → compared to stored hash
2. System reset key → hashed → compared to stored hash
3. No plain-text credentials visible in inspect tool
4. Firebase rules prevent unauthorized database writes

**Note:** Determined attackers can still bypass client-side checks. This is a security improvement, not a complete solution.

## Firebase Configuration Security

✅ **Firebase credentials are now externalized** for better security:

- Configuration is stored in `js/firebase-config.js` (excluded from version control)
- A template file `js/firebase-config.example.js` is provided for setup
- API keys authenticate your app to Firebase, not users
- Security is enforced via [Firebase Rules](firebase-rules.json)
- Each developer uses their own Firebase project configuration
- See: [Google's official guidance](https://firebase.google.com/docs/projects/api-keys)

**Setup Instructions:**
1. Copy `js/firebase-config.example.js` to `js/firebase-config.js`
2. Replace placeholder values with your Firebase project credentials
3. Never commit `js/firebase-config.js` to version control

For production apps with sensitive data, consider:
- Firebase App Check (bot protection)
- Backend API with Firebase Admin SDK
- Environment variables + build tooling