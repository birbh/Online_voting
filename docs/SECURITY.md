# Security Implementation

## Admin credentials (keep confidential)

- Badge ID: `2026`

## What this demo includes

### 1. SHA-256 hashing (client-side)
- Credentials are hashed before comparison.
- Plain-text values are not stored in the code.
- This is a demo-only safeguard, not production security.

### 2. Firebase Realtime Database rules

Upload [docs/firebase-rules.json](firebase-rules.json) to the Firebase console:

1. Go to **Realtime Database** -> **Rules**.
2. Paste the file contents.
3. Click **Publish**.

## Recommended for production

Client-side authentication can be bypassed. For production use:

1. Firebase Authentication
2. Server-side APIs with Firebase Admin SDK
3. Rate limiting and audit logging
4. Strict HTTPS with security headers

## Firebase config visibility

Firebase API keys are visible in client code by design. Use rules and authentication to secure data access. See: https://firebase.google.com/docs/projects/api-keys