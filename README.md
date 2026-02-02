# 🚨 Digital Investigator - Crime Scene Voting System

A real-time interactive crime investigation voting application with live analytics. Users vote for suspects and submit evidence, while administrators monitor results through a secure dashboard.

![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)
![Firebase](https://img.shields.io/badge/Firebase-Realtime%20DB-orange)

## Features

- **Real-time voting** with Firebase sync
- **Feedback submission** for evidence and theories
- **Admin dashboard** with live analytics and Chart.js visualization
- **SHA-256 hashed authentication** for admin access
- **System reset** with dual-key confirmation
- **Mobile-first responsive design**

## Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/birbh/Online_voting.git
   cd Online_voting
   ```

2. **Configure Firebase**
   - Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
   - Enable the required services in Firebase
   - Update Firebase config in [js/config.js](js/config.js)
   - Deploy rules from [docs/firebase-rules.json](docs/firebase-rules.json)
   - For detailed instructions, see [docs/firebase-setup.md](docs/firebase-setup.md)

3. **Deploy**
   ```bash
   # Local testing
   python3 -m http.server 8000
   # Or upload to GitHub Pages, Netlify, Vercel, etc.
   ```

## 📁 Project Structure

```
📁 Online_voting/
├── 📄 index.html          # Voting interface
├── 📄 admin.html          # Admin dashboard
├── 📄 feedback.html       # Evidence submission
├── 📁 css/
│   ├── index.css
│   ├── admin.css
│   └── feedback.css
|── 📁 js/
│   ├── config.js 
├── 📁 docs/
│   ├── LICENSE
│   ├── SECURITY.md
│   ├── firebase-setup.md
│   └── firebase-rules.json
└── 📄 README.md
```

## Usage

**Voting**: Open `index.html` → Choose suspect → Submit feedback

**Admin**: Open `admin.html` → Enter credentials (see [docs/SECURITY.md](docs/SECURITY.md)) → View analytics

**Reset**: Click "EVIDENCE PURGE" → Confirm → Enter clear key

## Security

Admin credentials and setup instructions: **[docs/SECURITY.md](docs/SECURITY.md)**

⚠️ Client-side authentication is **not production-ready**. Use Firebase Auth for real deployments.

## Tech Stack

HTML5 • CSS3 • JavaScript • Firebase Realtime Database • Chart.js

## Demo--:

https://github.com/user-attachments/assets/86fb4d7d-3ef0-4a20-b77c-7be5824090f1


## 📄 License

MIT License - see [docs/LICENSE](docs/LICENSE)

**Copyright © 2026 Biraj Bhattarai**

## 🤖 AI Assistance

This project was developed with assistance from AI tools for:
- Code optimization and refactoring
- Firebase Realtime Database connectivity and configuration
- Security implementation (SHA-256 hashing, Firebase rules)
- Architecture and best practices

---

