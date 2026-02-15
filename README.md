# Digital Investigator - Crime Scene Voting System

A real-time classroom or event experience where participants vote on suspects and leave evidence notes, while admins watch the results live.

![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)
![Firebase](https://img.shields.io/badge/Firebase-Realtime%20DB-orange)

## Features

- Live voting with Firebase sync
- Evidence submission with optional suspect context
- Admin console with real-time analytics and Chart.js
- Simple hashed admin access (demo only)
- Mobile-first layouts

## Quick Start

1) Clone and open the project
```bash
git clone https://github.com/birbh/Online_voting.git
cd Online_voting
```

2) Configure Firebase
- Create a Firebase project at https://console.firebase.google.com
- Enable Realtime Database
- Update the config inside the HTML files
- Apply the rules from [docs/firebase-rules.json](docs/firebase-rules.json)
- Details: [docs/firebase-setup.md](docs/firebase-setup.md)

3) Run locally
```bash
python3 -m http.server 8000
```

## Project Structure

```
Online_voting/
├── index.html
├── admin.html
├── feedback.html
├── css/
│   ├── index.css
│   ├── admin.css
│   └── feedback.css
├── js/
│   └── config.js
├── docs/
│   ├── LICENSE
│   ├── SECURITY.md
│   ├── firebase-setup.md
│   └── firebase-rules.json
└── README.md
```

## Usage

- Voting: open [index.html](index.html), choose a suspect, then add evidence.
- Admin: open [admin.html](admin.html) and enter the credentials in [docs/SECURITY.md](docs/SECURITY.md).
- Reset: use the Evidence Purge button and provide the clear key.

## Security Notes

Client-side authentication is for demos only. For production, use Firebase Auth and server-side checks. See [docs/SECURITY.md](docs/SECURITY.md).

## Demo

https://github.com/user-attachments/assets/86fb4d7d-3ef0-4a20-b77c-7be5824090f1

## License

MIT License - see [docs/LICENSE](docs/LICENSE)

Copyright (c) 2026 Biraj Bhattarai