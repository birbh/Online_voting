# Firebase setup (Realtime Database)

This app uses Firebase Realtime Database to store votes and feedback.

## 1) Create a Firebase project

1. Go to https://console.firebase.google.com
2. Click **Add project** and follow the wizard.
3. Open **Project settings** -> **General**.
4. Under **Your apps**, click the **Web** icon to register a web app.
5. Copy the Firebase web app configuration object.

## 2) Update the app configuration

Replace the `firebaseConfig` object inside:
- [index.html](../index.html)
- [admin.html](../admin.html)
- [feedback.html](../feedback.html)

Example configuration:

```js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT-default-rtdb.YOUR_REGION.firebasedatabase.app",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

## 3) Enable Realtime Database

1. Go to **Build** -> **Realtime Database**.
2. Click **Create Database**.
3. Choose a region and start in **locked** or **test** mode.

## 4) Apply security rules

Open the **Rules** tab in Realtime Database and paste the contents of:
- [docs/firebase-rules.json](firebase-rules.json)

## 5) Verify locally

1. Run a local server:
```bash
python3 -m http.server 8000
```
2. Open [index.html](../index.html) and submit a vote.
3. Confirm that votes and feedback appear in the Firebase console.

## Troubleshooting

- **Missing or invalid config**: ensure all three HTML files have the same config.
- **Permission denied**: review [docs/firebase-rules.json](firebase-rules.json) and publish the rules.
- **Auth errors**: check that your Firebase project is active and not blocked by billing limits.