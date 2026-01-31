# Firebase Configuration Setup Guide

## Overview
This project uses Firebase Realtime Database for storing votes and feedback. To protect sensitive credentials, the Firebase configuration has been externalized to a separate file that is not tracked in version control.

## Quick Setup

### For the Repository Owner
If this is your repository and you want to keep using your existing Firebase project:

1. The file `js/firebase-config.js` already exists locally with your credentials
2. This file is in `.gitignore` and will not be committed to the repository
3. Your credentials are safe and will not be exposed in the repository
4. The application will continue to work as before

### For New Users / Contributors
If you've cloned this repository and need to set up your own Firebase project:

1. **Create a Firebase project:**
   - Go to https://console.firebase.google.com
   - Create a new project or use an existing one
   - Enable Realtime Database

2. **Get your Firebase configuration:**
   - In your Firebase project, go to Project Settings > General
   - Scroll down to "Your apps" section
   - Click on the Web app (</>) icon or select your existing web app
   - Copy the Firebase configuration object

3. **Create your local configuration file:**
   ```bash
   cd js/
   cp firebase-config.example.js firebase-config.js
   ```

4. **Update with your credentials:**
   - Open `js/firebase-config.js` in your editor
   - Replace the placeholder values with your actual Firebase credentials

5. **Deploy Firebase security rules:**
   ```bash
   firebase deploy --only database
   ```
   Or manually copy the rules from `docs/firebase-rules.json` to your Firebase Console

## Security Notes

✅ **What's Protected:**
- Your Firebase configuration is in `js/firebase-config.js`
- This file is in `.gitignore` and will never be committed
- Each developer can use their own Firebase project

⚠️ **Important Reminders:**
- Never commit `js/firebase-config.js` to version control
- Firebase API keys are meant to be used in client-side code
- Security is enforced through Firebase Security Rules (see `docs/firebase-rules.json`)
- For production apps, consider additional security measures mentioned in `docs/SECURITY.md`

## File Structure

```
js/
├── config.js                    # Shared suspect data configuration (committed)
├── firebase-config.example.js   # Template with placeholders (committed)
└── firebase-config.js           # Your actual credentials (NOT committed - in .gitignore)
```

## Troubleshooting

**Q: I see "firebase is not defined" error**  
A: Make sure `js/firebase-config.js` exists and contains valid Firebase credentials

**Q: Can I share my firebase-config.js file?**  
A: No, this file contains credentials and should not be shared publicly. However, Firebase API keys are designed to be used in client-side code, and security is enforced through Firebase Security Rules.

**Q: What if I accidentally committed firebase-config.js?**  
A: If you've committed this file, you should:
1. Remove it from git history: `git rm --cached js/firebase-config.js`
2. Commit the change: `git commit -m "Remove firebase config from tracking"`
3. Ensure it's in `.gitignore`
4. Consider rotating your Firebase API key if it was pushed to a public repository

## Additional Resources

- [Firebase Documentation](https://firebase.google.com/docs)
- [Firebase Security Rules](https://firebase.google.com/docs/database/security)
- [API Keys Security FAQ](https://firebase.google.com/docs/projects/api-keys)
