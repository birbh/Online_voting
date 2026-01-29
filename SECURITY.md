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
