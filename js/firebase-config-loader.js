/* ===== FIREBASE CONFIGURATION LOADER ===== */
// This file provides a flexible way to load Firebase configuration
// It supports both local development (from firebase-config.js) and deployment (from environment variables)

(function() {
  // Try to load from firebaseConfig first (set by firebase-config.js if it exists)
  if (typeof firebaseConfig !== 'undefined' && firebaseConfig) {
    console.log('✓ Firebase config loaded from firebase-config.js');
    return;
  }

  // Fallback: Load from environment variables (injected during GitHub Pages deployment)
  // These will be replaced by the actual values during the build/deployment process
  const envConfig = {
    apiKey: '${FIREBASE_API_KEY}',
    authDomain: '${FIREBASE_AUTH_DOMAIN}',
    databaseURL: '${FIREBASE_DATABASE_URL}',
    projectId: '${FIREBASE_PROJECT_ID}',
    storageBucket: '${FIREBASE_STORAGE_BUCKET}',
    messagingSenderId: '${FIREBASE_MESSAGING_SENDER_ID}',
    appId: '${FIREBASE_APP_ID}'
  };

  // Check if environment variables were actually replaced (not still placeholders)
  const isConfigured = envConfig.apiKey && !envConfig.apiKey.startsWith('${');

  if (isConfigured) {
    // Make it globally available
    if (typeof window !== 'undefined') {
      window.firebaseConfig = envConfig;
    } else {
      // For Node.js/testing environments
      global.firebaseConfig = envConfig;
    }
    console.log('✓ Firebase config loaded from environment variables');
  } else {
    // No configuration found - show a helpful error message
    console.error('❌ Firebase configuration not found!');
    console.error('For local development: Copy js/firebase-config.example.js to js/firebase-config.js and add your credentials');
    console.error('For deployment: Ensure Firebase secrets are configured in your deployment pipeline');
    
    // Create a placeholder config to prevent crashes
    const placeholderConfig = {
      apiKey: 'MISSING_CONFIG',
      authDomain: 'MISSING_CONFIG',
      databaseURL: 'MISSING_CONFIG',
      projectId: 'MISSING_CONFIG',
      storageBucket: 'MISSING_CONFIG',
      messagingSenderId: 'MISSING_CONFIG',
      appId: 'MISSING_CONFIG'
    };
    
    if (typeof window !== 'undefined') {
      window.firebaseConfig = placeholderConfig;
    } else {
      global.firebaseConfig = placeholderConfig;
    }

    // Show user-friendly error message in browser
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      setTimeout(function() {
        const body = document.body;
        if (body) {
          const errorDiv = document.createElement('div');
          errorDiv.style.cssText = 'position:fixed;top:0;left:0;right:0;background:#ff4444;color:white;padding:20px;text-align:center;z-index:99999;font-family:monospace;';
          errorDiv.innerHTML = '<strong>⚠️ Firebase Configuration Missing</strong><br>This application requires Firebase credentials to function. Please check the console for setup instructions.';
          body.insertBefore(errorDiv, body.firstChild);
        }
      }, 100);
    }
  }
})();
