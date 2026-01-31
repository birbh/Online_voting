# GitHub Pages Deployment Guide

## Overview

This guide explains how to deploy the Digital Investigator application to GitHub Pages with Firebase configuration.

## Deployment Architecture

The application uses a two-tier configuration system:

1. **Local Development**: Firebase credentials are loaded from `js/firebase-config.js` (gitignored)
2. **GitHub Pages Deployment**: Firebase credentials are injected from GitHub Secrets during the deployment process

## Setup Instructions

### Step 1: Configure GitHub Secrets

You need to add your Firebase credentials as GitHub repository secrets:

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret** and add the following secrets:

| Secret Name | Description | Example |
|-------------|-------------|---------|
| `FIREBASE_API_KEY` | Your Firebase API Key | `AIzaSyC...` |
| `FIREBASE_AUTH_DOMAIN` | Your Firebase Auth Domain | `your-project.firebaseapp.com` |
| `FIREBASE_DATABASE_URL` | Your Firebase Realtime Database URL | `https://your-project-default-rtdb.firebaseio.com` |
| `FIREBASE_PROJECT_ID` | Your Firebase Project ID | `your-project` |
| `FIREBASE_STORAGE_BUCKET` | Your Firebase Storage Bucket | `your-project.appspot.com` |
| `FIREBASE_MESSAGING_SENDER_ID` | Your Messaging Sender ID | `123456789` |
| `FIREBASE_APP_ID` | Your Firebase App ID | `1:123456789:web:abc123` |

**Where to find these values:**
- Go to [Firebase Console](https://console.firebase.google.com)
- Select your project
- Go to **Project Settings** → **General**
- Scroll down to **Your apps** section
- Click on your web app (or create one if it doesn't exist)
- Copy the values from the Firebase configuration object

### Step 2: Enable GitHub Pages

1. Go to your GitHub repository
2. Navigate to **Settings** → **Pages**
3. Under **Build and deployment**:
   - Source: Select **GitHub Actions**
4. Save the settings

### Step 3: Deploy

The deployment happens automatically:

1. Push changes to the `main` branch, or
2. Manually trigger the workflow from **Actions** → **Deploy to GitHub Pages** → **Run workflow**

The GitHub Actions workflow (`.github/workflows/deploy-pages.yml`) will:
1. Checkout the code
2. Inject Firebase credentials from secrets
3. Deploy to GitHub Pages

### Step 4: Access Your Deployed Site

After deployment completes:
- Your site will be available at: `https://<username>.github.io/<repository-name>/`
- Example: `https://birbh.github.io/Online_voting/`

## How It Works

### Configuration Loading Process

1. **HTML files** load three scripts in order:
   ```html
   <script src="js/config.js"></script>
   <script src="js/firebase-config.js" onerror="..."></script>
   <script src="js/firebase-config-loader.js"></script>
   ```

2. **firebase-config-loader.js** checks for configuration in this order:
   - First, try to use `firebaseConfig` from `firebase-config.js` (local dev)
   - If not found, use environment variables injected during deployment
   - If neither exists, show an error message

3. **GitHub Actions workflow** replaces placeholders with actual secrets during deployment

### Local Development

For local development, the application works as before:
1. Copy `js/firebase-config.example.js` to `js/firebase-config.js`
2. Add your Firebase credentials
3. The file is gitignored and won't be committed

### Deployment

For GitHub Pages deployment:
1. GitHub Secrets store your Firebase credentials securely
2. The workflow injects them during the build process
3. The deployed site has the configuration baked in

## Security Notes

✅ **What's Secure:**
- Firebase credentials are stored as GitHub Secrets (encrypted)
- Credentials are never committed to the repository
- Local development keeps credentials in gitignored files

⚠️ **Important:**
- Firebase API keys are designed to be included in client-side code
- Security is enforced through Firebase Security Rules (see `docs/firebase-rules.json`)
- For production apps, always use proper Firebase Security Rules

## Troubleshooting

### Error: "Firebase Configuration Missing"

**Cause**: GitHub Secrets are not configured or the workflow didn't run successfully.

**Solution**:
1. Verify all 7 Firebase secrets are added in GitHub Settings → Secrets
2. Check the Actions tab for workflow errors
3. Re-run the deployment workflow

### Error: Permission denied on GitHub Pages

**Cause**: GitHub Pages deployment permissions are not enabled.

**Solution**:
1. Go to Settings → Actions → General
2. Scroll to "Workflow permissions"
3. Select "Read and write permissions"
4. Check "Allow GitHub Actions to create and approve pull requests"
5. Save and re-run the workflow

### Site shows old content

**Cause**: Browser cache or GitHub Pages cache.

**Solution**:
1. Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
2. Wait a few minutes for GitHub Pages to propagate changes
3. Clear browser cache

## Testing Deployment Locally

To test the deployment process locally:

```bash
# Install GitHub Actions CLI (act)
# https://github.com/nektos/act

# Run the workflow locally with your secrets
act -s FIREBASE_API_KEY="your-key" \
    -s FIREBASE_AUTH_DOMAIN="your-domain" \
    # ... etc
```

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [GitHub Encrypted Secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets)
- [Firebase Security Rules](https://firebase.google.com/docs/database/security)

## Support

If you encounter issues:
1. Check the Actions tab in GitHub for workflow logs
2. Verify all secrets are correctly configured
3. Ensure Firebase Security Rules are deployed
4. Check browser console for error messages
