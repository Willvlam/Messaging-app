# SecureMessage - Messaging App

A private messaging application that runs entirely in the browser using GitHub Pages. No server needed - all data is stored locally on your device.

## Features

 **Account Creation** - Create accounts with username and password protection
 **Direct Messages & Rooms** - Chat one-on-one or create password-protected rooms
 **Room Passwords** - You name a room and give it a password; others must enter it to join
 **Friend System** - Add people as friends and easily invite them to chats / rooms
 **Message Storage** - All messages are saved locally in your browser
 **Multiple Conversations** - Chat with multiple people or rooms
 **Persistent Membership** - Once you join a room, your account stays in it until you leave
 **QR Sync** - Export your entire data set to a QR code and scan it on another device to transfer accounts, rooms, and messages
 **No Tracking** - All data stays on your device
 **GitHub Pages Deployment** - Free hosting with GitHub Pages

## How It Works

This app uses browser `localStorage` to store:
- User accounts (with passwords)
- All direct messages and room conversations
- Room definitions: password, participants, and message history

Since everything is stored locally in your browser, different browsers/devices won't sync automatically. QR export/import lets you manually transfer data between devices.

## Deployment to GitHub Pages

### Step 1: Push to GitHub
If you haven't already, push this project to GitHub:
```bash
git add .
git commit -m "Add messaging app"
git push
```

### Step 2: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click on **Settings**
3. Scroll down to **Pages** section
4. Under "Source", select `main` branch
5. The site will be published at: `https://yourusername.github.io/Messaging-app`

### Step 3: Access Your App
Visit `https://yourusername.github.io/Messaging-app` in your browser

## Usage

### Create an Account
1. Click "Sign Up" on the login page
2. Enter a username (min 3 characters)
3. Enter a password (min 6 characters)
4. Confirm your password

### Add Friends
1. After logging in, use the **Friends** panel on the left
2. Enter a username and click **Add Friend**
3. This sends a friend request to that user; they must accept it
4. When they accept, you'll both appear in each other's friend lists and the chat autocomplete

Pending incoming requests appear at the top of the Friends panel, where you can **Accept** or **Decline** them. Requests you've sent are also shown under a "Pending (sent)" header, and you may cancel them if needed.

### Direct Messages
1. Log in to your account
2. In the left sidebar, choose "User" from the drop‑down
3. Enter the other person's username and click "Open Chat"
4. Type your message and click "Send" or press Enter

### Rooms (Group Chats)
1. Select "Room" from the drop‑down in the left sidebar
2. Enter a room name and set a password
   - If the room already exists, you will be prompted for its password to join
   - If it does not exist, a new room will be created with the given password
3. Everyone in the room can send messages that are visible to all participants
   - You can invite friends from the room header using the friends dropdown
4. Once you join, your account remains a member of the room until you leave it
5. To leave the room, click the "Leave" button next to the room in the conversations list; if you're the last person to leave, the room is deleted

### QR Export / Import (Sync)
- Click **Export QR** in the header to generate a code containing all accounts, messages, and rooms
- Scan the code on another device by clicking **Scan QR** and pointing the camera at the code
- The imported data replaces the current local storage (backup if necessary)
- You can also download the QR code as an image for later use

### Delete Conversations
- Click the "Delete" button next to any direct chat to remove all messages
- Rooms show a "Leave" button instead of delete

### Log Out
- Click the "Logout" button in the top right

## Technical Details

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Storage**: Browser localStorage (persists across sessions)
- **No Backend**: Everything runs locally in the browser
- **Browser Compatibility**: Works in all modern browsers (Chrome, Firefox, Safari, Edge)

## Security Notes

⚠️ **This is for privacy from external parties, not from the browser itself**
- Your password is stored locally in localStorage (not hashed)
- Room passwords are also stored in localStorage
- If someone gets access to your device, they can access your messages
- For true security, consider using passwords carefully and clearing browser data when needed

## File Structure

```
├── index.html    # Main HTML structure
├── styles.css    # All styling
├── app.js        # JavaScript app logic
└── README.md     # Documentation
```

## Tips

- Each browser/device keeps its own separate copy of accounts and messages
- You can have the same username on different devices with different messages
- Use QR export/import to sync between browsers/devices
- Clear all data by clearing browser cache and site data

---

**Made with ❤️ for private, decentralized messaging**
