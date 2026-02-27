// =====================
// Data Management
// =====================

class MessagingApp {
   constructor() {
       this.currentUser = null;
       this.currentChat = null;
       this.currentChatType = 'user';
       this.loadCurrentUser();
       this.initializeEventListeners();
       this.render();
   }

   // Storage Keys
   get STORAGE_KEY() { return 'messaging_app_users'; }
   get MESSAGES_KEY() { return 'messaging_app_messages'; }
   get ROOMS_KEY() { return 'messaging_app_rooms'; }
   get FRIENDS_KEY() { return 'messaging_app_friends'; }
   get FRIEND_REQUESTS_KEY() { return 'messaging_app_friend_requests'; }

   // =====================
   // Auth Methods
   // =====================

   loadCurrentUser() {
       const stored = sessionStorage.getItem('current_user');
       if (stored) {
           this.currentUser = JSON.parse(stored);
       }
   }

   saveCurrentUser() {
       if (this.currentUser) {
           sessionStorage.setItem('current_user', JSON.stringify(this.currentUser));
       }
   }

   getAllUsers() {
       const stored = localStorage.getItem(this.STORAGE_KEY);
       return stored ? JSON.parse(stored) : {};
   }

   saveAllUsers(users) {
       localStorage.setItem(this.STORAGE_KEY, JSON.stringify(users));
   }

   // ===== friendship =====
   getAllFriends() {
       const stored = localStorage.getItem(this.FRIENDS_KEY);
       return stored ? JSON.parse(stored) : {};
   }

   saveAllFriends(friends) {
       localStorage.setItem(this.FRIENDS_KEY, JSON.stringify(friends));
   }

   // ===== friend requests =====
   getAllFriendRequests() {
       const stored = localStorage.getItem(this.FRIEND_REQUESTS_KEY);
       return stored ? JSON.parse(stored) : {};
   }

   saveAllFriendRequests(requests) {
       localStorage.setItem(this.FRIEND_REQUESTS_KEY, JSON.stringify(requests));
   }

   getFriendRequestsForCurrent() {
       if (!this.currentUser) return [];
       const all = this.getAllFriendRequests();
       return all[this.currentUser.username] || [];
   }

   getOutgoingFriendRequests() {
       if (!this.currentUser) return [];
       const all = this.getAllFriendRequests();
       const outgoing = [];
       for (const user in all) {
           if (all[user].includes(this.currentUser.username)) {
               outgoing.push(user);
           }
       }
       return outgoing;
   }

   cancelFriendRequest(toUsername) {
       if (!this.currentUser) return;
       const all = this.getAllFriendRequests();
       if (!all[toUsername]) return;
       all[toUsername] = all[toUsername].filter(u => u !== this.currentUser.username);
       this.saveAllFriendRequests(all);
   }

   sendFriendRequest(toUsername) {
       if (!this.currentUser) return { success: false, error: 'Not logged in' };
       const users = this.getAllUsers();
       if (!users[toUsername]) return { success: false, error: 'User not found' };
       if (toUsername === this.currentUser.username) return { success: false, error: 'Cannot friend yourself' };
       
       const friends = this.getFriendsForCurrent();
       if (friends.includes(toUsername)) return { success: false, error: 'Already friends' };
       
       const all = this.getAllFriendRequests();
       if (!all[toUsername]) all[toUsername] = [];
       if (all[toUsername].includes(this.currentUser.username)) return { success: false, error: 'Request already sent' };
       
       all[toUsername].push(this.currentUser.username);
       this.saveAllFriendRequests(all);
       return { success: true };
   }

   acceptFriendRequest(fromUsername) {
       if (!this.currentUser) return { success: false, error: 'Not logged in' };
       const requests = this.getAllFriendRequests();
       const arr = requests[this.currentUser.username] || [];
       if (!arr.includes(fromUsername)) return { success: false, error: 'No such request' };
       
       requests[this.currentUser.username] = arr.filter(u => u !== fromUsername);
       this.saveAllFriendRequests(requests);
       this.addFriend(fromUsername);
       
       const allFriends = this.getAllFriends();
       if (!allFriends[fromUsername]) allFriends[fromUsername] = [];
       if (!allFriends[fromUsername].includes(this.currentUser.username)) {
           allFriends[fromUsername].push(this.currentUser.username);
           this.saveAllFriends(allFriends);
       }
       return { success: true };
   }

   declineFriendRequest(fromUsername) {
       if (!this.currentUser) return;
       const requests = this.getAllFriendRequests();
       const arr = requests[this.currentUser.username] || [];
       requests[this.currentUser.username] = arr.filter(u => u !== fromUsername);
       this.saveAllFriendRequests(requests);
   }

   getFriendsForCurrent() {
       if (!this.currentUser) return [];
       const all = this.getAllFriends();
       return all[this.currentUser.username] || [];
   }

   addFriend(username) {
       if (!this.currentUser) return { success: false, error: 'Not logged in' };
       const users = this.getAllUsers();
       if (!users[username]) return { success: false, error: 'User not found' };
       if (username === this.currentUser.username) return { success: false, error: 'Cannot friend yourself' };
       
       const all = this.getAllFriends();
       if (!all[this.currentUser.username]) all[this.currentUser.username] = [];
       if (all[this.currentUser.username].includes(username)) return { success: false, error: 'Already friends' };
       
       all[this.currentUser.username].push(username);
       this.saveAllFriends(all);
       return { success: true };
   }

   removeFriend(username) {
       if (!this.currentUser) return;
       const all = this.getAllFriends();
       if (!all[this.currentUser.username]) return;
       all[this.currentUser.username] = all[this.currentUser.username].filter(u => u !== username);
       this.saveAllFriends(all);
   }

   signup(username, password) {
       if (!username || !password) return { success: false, error: 'Username and password required' };
       const users = this.getAllUsers();
       if (users[username]) return { success: false, error: 'Username already exists' };
       
       users[username] = { username, password, createdAt: new Date().toISOString() };
       this.saveAllUsers(users);
       this.currentUser = { username };
       this.saveCurrentUser();
       return { success: true };
   }

   login(username, password) {
       const users = this.getAllUsers();
       if (!users[username]) return { success: false, error: 'User not found' };
       if (users[username].password !== password) return { success: false, error: 'Incorrect password' };
       
       this.currentUser = { username };
       this.saveCurrentUser();
       return { success: true };
   }

   logout() {
       this.currentUser = null;
       this.currentChat = null;
       this.currentChatType = 'user';
       sessionStorage.removeItem('current_user');
       this.render();
   }

   // =====================
   // Message Methods
   // =====================

   getConversationKey(user1, user2) {
       const sorted = [user1, user2].sort();
       return `${sorted[0]}_${sorted[1]}`;
   }

   getAllRooms() {
       const stored = localStorage.getItem(this.ROOMS_KEY);
       return stored ? JSON.parse(stored) : {};
   }

   saveAllRooms(rooms) {
       localStorage.setItem(this.ROOMS_KEY, JSON.stringify(rooms));
   }

   getUserRooms() {
       const rooms = this.getAllRooms();
       return Object.keys(rooms).filter(r => rooms[r].participants.includes(this.currentUser.username)).sort();
   }

   getRoomMessages(roomName) {
       const rooms = this.getAllRooms();
       if (rooms[roomName]) return rooms[roomName].messages || [];
       return [];
   }

   saveRoomMessage(roomName, from, content) {
       const rooms = this.getAllRooms();
       if (!rooms[roomName]) return;
       if (!rooms[roomName].messages) rooms[roomName].messages = [];
       
       const msg = Object.assign({ from, timestamp: new Date().toISOString() }, content);
       rooms[roomName].messages.push(msg);
       this.saveAllRooms(rooms);
   }

   // === UPDATED ROOM METHODS ===
   joinRoom(roomName, password) {
       const rooms = this.getAllRooms();
       if (!rooms[roomName]) return { success: false, error: 'Room does not exist' };
       if (rooms[roomName].password !== password) return { success: false, error: 'Incorrect password' };
       
       if (!rooms[roomName].participants.includes(this.currentUser.username)) {
           rooms[roomName].participants.push(this.currentUser.username);
           this.saveAllRooms(rooms);
       }
       return { success: true };
   }

   createRoom(roomName, password) {
       const rooms = this.getAllRooms();
       if (rooms[roomName]) return { success: false, error: 'Room name already taken' };
       if (!password) return { success: false, error: 'A password is required to create a room' };
       
       rooms[roomName] = { 
           password: password, 
           participants: [this.currentUser.username], 
           messages: [] 
       };
       this.saveAllRooms(rooms);
       return { success: true };
   }

   leaveRoom(roomName) {
       const rooms = this.getAllRooms();
       if (!rooms[roomName]) return;
       rooms[roomName].participants = rooms[roomName].participants.filter(u => u !== this.currentUser.username);
       if (rooms[roomName].participants.length === 0) delete rooms[roomName];
       
       this.saveAllRooms(rooms);
       if (this.currentChat === roomName && this.currentChatType === 'room') {
           this.currentChat = null;
       }
       this.updateAppUI();
   }

   getAllMessages() {
       const stored = localStorage.getItem(this.MESSAGES_KEY);
       return stored ? JSON.parse(stored) : {};
   }

   saveAllMessages(messages) {
       localStorage.setItem(this.MESSAGES_KEY, JSON.stringify(messages));
   }

   getMessages(user1, user2) {
       const key = this.getConversationKey(user1, user2);
       const allMessages = this.getAllMessages();
       return allMessages[key] || [];
   }

   saveMessage(from, to, content) {
       const key = this.getConversationKey(from, to);
       const allMessages = this.getAllMessages();
       if (!allMessages[key]) allMessages[key] = [];
       
       const msg = Object.assign({ from, to, timestamp: new Date().toISOString() }, content);
       allMessages[key].push(msg);
       this.saveAllMessages(allMessages);
   }

   sendTextMessage(text) {
       if (!this.currentChat || !text.trim()) return false;
       this.saveMessage(this.currentUser.username, this.currentChat, { type: 'text', text });
       return true;
   }

   sendFileMessage(fileObj) {
       if (!this.currentChat || !fileObj) return false;
       this.saveMessage(this.currentUser.username, this.currentChat, Object.assign({ type: 'file' }, fileObj));
       return true;
   }

   // =====================
   // UI & Event Methods
   // =====================

   getConversations() {
       const allMessages = this.getAllMessages();
       const conversations = new Set();
       for (const key in allMessages) {
           const [user1, user2] = key.split('_');
           const otherUser = user1 === this.currentUser.username ? user2 : user1;
           conversations.add(otherUser);
       }
       const friends = this.getFriendsForCurrent();
       friends.forEach(f => conversations.add(f));

       const directs = Array.from(conversations).sort().map(u => ({ name: u, type: 'user' }));
       const rooms = this.getUserRooms().map(r => ({ name: r, type: 'room' }));
       return [...rooms, ...directs];
   }

   render() {
       this.updateAuthUI();
       if (this.currentUser) this.updateAppUI();
   }

   updateAuthUI() {
       const authContainer = document.getElementById('authContainer');
       const appContainer = document.getElementById('appContainer');
       if (this.currentUser) {
           authContainer.classList.add('hidden');
           appContainer.classList.remove('hidden');
       } else {
           authContainer.classList.remove('hidden');
           appContainer.classList.add('hidden');
       }
   }

   updateAppUI() {
       this.updateCurrentUserDisplay();
       this.updateFriendsList();
       this.updateConversationsList();
       this.updateChatView();
   }

   updateCurrentUserDisplay() {
       const display = document.getElementById('currentUserDisplay');
       if (display) display.textContent = `@${this.currentUser.username}`;
   }

   updateFriendsList() {
       const list = document.getElementById('friendsList');
       if (!list) return;

       const friends = this.getFriendsForCurrent();
       const requests = this.getFriendRequestsForCurrent();
       list.innerHTML = '';

       // Render Requests
       requests.forEach(from => {
           const item = document.createElement('div');
           item.className = "friend-request";
           item.innerHTML = `Req from @${from} <button onclick="app.acceptFriendRequest('${from}'); app.updateAppUI();">Accept</button>`;
           list.appendChild(item);
       });

       // Render Friends
       friends.forEach(f => {
           const item = document.createElement('div');
           item.className = "friend-item";
           item.textContent = `@${f}`;
           list.appendChild(item);
       });
   }

   updateConversationsList() {
       const list = document.getElementById('conversationsList');
       list.innerHTML = '';
       const conversations = this.getConversations();
       conversations.forEach(conv => {
           const item = document.createElement('div');
           item.className = `conversation-item ${this.currentChat === conv.name ? 'active' : ''}`;
           item.textContent = (conv.type === 'room' ? '#' : '@') + conv.name;
           item.onclick = () => {
               this.currentChat = conv.name;
               this.currentChatType = conv.type;
               this.updateAppUI();
           };
           list.appendChild(item);
       });
   }

   updateChatView() {
       const chatView = document.getElementById('chatView');
       const noChat = document.getElementById('noChatSelected');
       if (!this.currentChat) {
           chatView.classList.add('hidden');
           noChat.classList.remove('hidden');
           return;
       }
       chatView.classList.remove('hidden');
       noChat.classList.add('hidden');
       document.getElementById('chatWith').textContent = (this.currentChatType === 'room' ? '#' : '@') + this.currentChat;
       this.renderMessages();
   }

   renderMessages() {
       const container = document.getElementById('messagesContainer');
       container.innerHTML = '';
       let messages = this.currentChatType === 'room' 
           ? this.getRoomMessages(this.currentChat) 
           : this.getMessages(this.currentUser.username, this.currentChat);

       messages.forEach(msg => {
           const div = document.createElement('div');
           div.className = `message ${msg.from === this.currentUser.username ? 'sent' : 'received'}`;
           div.innerHTML = `<strong>${msg.from}:</strong> ${msg.text || 'File'}`;
           container.appendChild(div);
       });
       container.scrollTop = container.scrollHeight;
   }

   // =====================
   // QR Export & Import Logic
   // =====================
   
   exportDataAsQR() {
       const data = {
           users: this.getAllUsers(),
           messages: this.getAllMessages(),
           rooms: this.getAllRooms(),
           friends: this.getAllFriends()
       };
       return JSON.stringify(data);
   }

   importDataFromQR(jsonString) {
       try {
           const data = JSON.parse(jsonString);
           if (data.users) localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data.users));
           if (data.messages) localStorage.setItem(this.MESSAGES_KEY, JSON.stringify(data.messages));
           if (data.rooms) localStorage.setItem(this.ROOMS_KEY, JSON.stringify(data.rooms));
           if (data.friends) localStorage.setItem(this.FRIENDS_KEY, JSON.stringify(data.friends));
           alert("Data imported! Please refresh.");
           location.reload();
       } catch (e) {
           alert("Invalid QR data.");
       }
   }

   // =====================
   // Event Listeners
   // =====================

   initializeEventListeners() {
       document.getElementById('loginBtn')?.addEventListener('click', () => this.handleLogin());
       document.getElementById('signupBtn')?.addEventListener('click', () => this.handleSignup());
       document.getElementById('logoutBtn')?.addEventListener('click', () => this.logout());
       document.getElementById('sendBtn')?.addEventListener('click', () => this.handleSendMessage());
       
       // Improved Room vs User toggle
       document.getElementById('chatTypeSelect')?.addEventListener('change', (e) => {
           const pwInput = document.getElementById('chatPasswordInput');
           const startBtn = document.getElementById('startChatBtn');
           const val = e.target.value;

           if (val.startsWith('room-')) {
               pwInput.classList.remove('hidden');
               startBtn.textContent = (val === 'room-join') ? 'Join Room' : 'Create Room';
           } else {
               pwInput.classList.add('hidden');
               startBtn.textContent = 'Open Chat';
           }
       });

       document.getElementById('startChatBtn')?.addEventListener('click', () => this.handleStartChat());
       
       document.getElementById('addFriendBtn')?.addEventListener('click', () => {
           const name = document.getElementById('addFriendInput').value;
           const res = this.sendFriendRequest(name);
           if (!res.success) alert(res.error);
           this.updateAppUI();
       });
   }

   handleLogin() {
       const u = document.getElementById('loginUsername').value;
       const p = document.getElementById('loginPassword').value;
       const res = this.login(u, p);
       if (res.success) this.render();
       else alert(res.error);
   }

   handleSignup() {
       const u = document.getElementById('signupUsername').value;
       const p = document.getElementById('signupPassword').value;
       const res = this.signup(u, p);
       if (res.success) this.render();
       else alert(res.error);
   }

   handleSendMessage() {
       const input = document.getElementById('messageInput');
       if (!input.value.trim()) return;
       if (this.currentChatType === 'room') {
           this.saveRoomMessage(this.currentChat, this.currentUser.username, { type: 'text', text: input.value });
       } else {
           this.sendTextMessage(input.value);
       }
       input.value = '';
       this.renderMessages();
   }

   handleStartChat() {
       const typeSelect = document.getElementById('chatTypeSelect');
       const nameInput = document.getElementById('chatNameInput');
       const pwInput = document.getElementById('chatPasswordInput');
       
       const name = nameInput.value.trim();
       const password = pwInput.value;

       if (!name) return alert('Enter a name');

       if (typeSelect.value === 'user') {
           this.currentChat = name;
           this.currentChatType = 'user';
           this.updateAppUI();
       } else {
           const isJoining = (typeSelect.value === 'room-join');
           const result = isJoining ? this.joinRoom(name, password) : this.createRoom(name, password);

           if (!result.success) return alert(result.error);

           this.currentChat = name;
           this.currentChatType = 'room';
           this.updateAppUI();
       }
       nameInput.value = '';
       pwInput.value = '';
   }
}

// Global App Instance
let app;
document.addEventListener('DOMContentLoaded', () => { app = new MessagingApp(); });