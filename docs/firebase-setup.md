# Firebase configuration

This project uses Firebase for authentication and data storage. Follow the steps below to create a Firebase project and wire it into the app.

## 1) Create a Firebase project

1. Go to the Firebase console: https://console.firebase.google.com/
2. Select **Add project** and follow the wizard.
3. In your project, open **Project settings** → **General**.
4. Under **Your apps**, click the **Web** icon (</>) to register a web app.
5. Copy the Firebase **web app configuration** object.

## 2) Update the app configuration

The app reads its Firebase configuration from html files. So,replace the placeholder values with your Firebase web app configuration in the all html files:

```js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

> Keep these values in the client as provided by Firebase. They are not secret, but you should still protect your project using proper security rules.

## 3) Enable Firebase services

Enable the services the app needs in the Firebase console:

- **Authentication** → enable the desired sign-in providers.
- **Firestore Database** → create the database (production or test mode).

## 4) Apply security rules (recommended)

A starter rules file exists at [docs/firebase-rules.json](firebase-rules.json). Apply these rules in the Firebase console:

1. Go to **Firestore Database** → **Rules**.
2. Replace the rules with the contents of [docs/firebase-rules.json](firebase-rules.json).
3. Click **Publish**.

## 5) Verify locally

1. Open [index.html](../index.html) in your browser.
2. Confirm the app loads without Firebase errors in the console.
3. Test basic flows (auth, voting, feedback) to ensure the rules allow expected access.

## Troubleshooting

- **Missing or invalid config**: verify the values in [js/config.js](../js/config.js) match the Firebase console.
- **Permission denied**: review Firestore rules in [docs/firebase-rules.json](firebase-rules.json).
- **Auth errors**: confirm the sign-in provider is enabled under **Authentication**.
