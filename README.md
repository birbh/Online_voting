# Crime Scene Voting System

This is a live voting thing for when you want people to guess who the criminal is. People vote on suspects and can leave notes. Admins get to see the results live on a chart.

## Project integration:
This project is integrated with the fingerprint biometric hardware system which can be accessed in:
[Fingerprint automation](https://github.com/birbh/Fingerprint_automation)
[Demo](https://birbh.github.io/Online_voting/index.html)

## How it works

1. **Voting**: Go to index.html and pick someone.
2. **Notes**: After voting, you can leave "evidence" notes.
3. **Admin**: Check admin.html to see who's winning. Use the code from docs/SECURITY.md.

## Setup

You need a Firebase account.
- Get your config from the Firebase console.
- Paste it into the script tags in index.html, admin.html, and feedback.html.
- Set the rules (see docs/firebase-rules.json).

## Files

- index.html - The main voting page.
- admin.html - The results dashboard.
- feedback.html - For leaving notes.
- css/ - All the styles.
- js/config.js - Edit the suspect list here.

## Running it

Just open the files in a browser or run:
```bash
python3 -m http.server
```
Then go to localhost:8000.
