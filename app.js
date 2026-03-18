// =====================
// Emoji Data
// =====================
const EMOJI_CATEGORIES = {
    smileys: ['😀','😃','😄','😁','😆','😅','😂','🤣','😊','😇','🙂','🙃','😉','😌','😍','🥰','😘','😗','😙','😚','😋','😛','😝','😜','🤪','🤨','🧐','🤓','😎','🤩','🥳','😏','😒','😞','😔','😟','😕','🙁','☹️','😣','😖','😫','😩','🥺','😢','😭','😤','😠','😡','🤬','🤯','😳','🥵','🥶','😱','😨','😰','😥','😓','🤗','🤔','🤭','🤫','🤥','😶','😐','😑','😬','🙄','😯','😦','😧','😮','😲','🥱','😴','🤤','😪','😵','🤐','🥴','🤢','🤮','🤧','😷','🤒','🤕'],
    gestures: ['👋','🤚','🖐','✋','🖖','👌','🤌','🤏','✌️','🤞','🤟','🤘','🤙','👈','👉','👆','🖕','👇','☝️','👍','👎','✊','👊','🤛','🤜','👏','🙌','👐','🤲','🤝','🙏','✍️','💅','🤳','💪','🦾','🦿','🦵','🦶','👂','🦻','👃','👀','👁','👅','👄'],
    hearts: ['❤️','🧡','💛','💚','💙','💜','🖤','🤍','🤎','💔','❣️','💕','💞','💓','💗','💖','💘','💝','💟','☮️','✝️','☪️','🕉','☸️','✡️','🔯','🕎','☯️','☦️','🛐','⛎','♈','♉','♊','♋','♌','♍','♎','♏','♐','♑','♒','♓'],
    animals: ['🐶','🐱','🐭','🐹','🐰','🦊','🐻','🐼','🐨','🐯','🦁','🐮','🐷','🐽','🐸','🐵','🙈','🙉','🙊','🐒','🐔','🐧','🐦','🐤','🦆','🦅','🦉','🦇','🐺','🐗','🐴','🦄','🐝','🐛','🦋','🐌','🐞','🐜','🦟','🦗','🐢','🐍','🦎','🦖','🦕','🐙','🦑','🦐','🦞','🦀','🐡','🐠','🐟','🐬','🐳','🐋','🦈','🐊','🐅','🐆','🦓','🦍','🦧','🐘','🦛','🦏','🐪','🐫','🦒','🦘','🐃','🐂','🐄','🐎','🐖','🐏','🐑','🦙','🐐','🦌','🐕','🐩','🦮','🐈','🐓','🦃','🦚','🦜','🦢','🦩','🕊','🐇','🦝','🦨','🦡','🦦','🦥','🐁','🐀','🦔'],
    food: ['🍎','🍐','🍊','🍋','🍌','🍉','🍇','🍓','🍈','🍒','🍑','🥭','🍍','🥥','🥝','🍅','🍆','🥑','🥦','🥬','🥒','🌶','🌽','🥕','🧄','🧅','🥔','🍠','🥐','🥯','🍞','🥖','🥨','🧀','🥚','🍳','🧈','🥞','🧇','🥓','🥩','🍗','🍖','🦴','🌭','🍔','🍟','🍕','🌮','🌯','🥙','🧆','🍿','🧂','🥫','🍱','🍘','🍙','🍚','🍛','🍜','🍝','🍢','🍣','🍤','🍥','🥮','🍡','🥟','🥠','🥡','🍦','🍧','🍨','🍩','🍪','🎂','🍰','🧁','🥧','🍫','🍬','🍭','🍮','🍯','🍼','🥛','☕','🍵','🧃','🥤','🍶','🍺','🍻','🥂','🍷','🥃','🍸','🍹','🧉','🍾'],
    activities: ['⚽','🏀','🏈','⚾','🥎','🏐','🏉','🎾','🥏','🎳','🏏','🏑','🏒','🥍','🏓','🏸','🥊','🥋','🎽','🛹','🛷','⛸','🥅','⛳','🏹','🎣','🤿','🎿','🥌','🎯','🎱','🎮','🎰','🎲','🧩','🧸','♟','🎭','🎨','🎬','🎤','🎧','🎼','🎹','🥁','🎷','🎺','🎸','🎻','📻','💻','🖥','📱','🎥','📷','📸'],
    travel: ['🚗','🚕','🚙','🚌','🚎','🏎','🚓','🚑','🚒','🚐','🚚','🚛','🚜','🛴','🛵','🏍','🚲','🚨','🚥','🚦','🛑','🚧','⛽','⚓','⛵','🛶','🚤','🛥','🛳','⛴','🚢','✈️','🛩','🛫','🛬','💺','🛸','🚁','🚀','🏠','🏡','🏢','🏥','🏦','🏨','🏪','🏫','🏬','🏯','🏰','💒','🗼','🗽','⛪','🕌','⛲','⛺','🌁','🌃','🏙','🌄','🌅','🌆','🌇','🌉','🌌'],
    symbols: ['💯','🔔','🔕','🎵','🎶','💤','🔇','🔈','🔉','🔊','📢','📣','💬','💭','🗯','♻️','⚜️','🔱','📛','🔰','⭕','✅','☑️','✔️','❌','❎','➕','➖','➗','✖️','💲','💱','‼️','⁉️','❓','❔','❕','❗','〰️','⚪','⚫','🔴','🟠','🟡','🟢','🔵','🟣','🟤','🔺','🔻','🔷','🔶','🔹','🔸','🔲','🔳','▪️','▫️','◾','◽','◼️','◻️','🟥','🟧','🟨','🟩','🟦','🟪','🟫','⬛','⬜','🏁','🚩','🎌','🏴','🏳️']
};

class MessagingApp {
    constructor() {
        this.currentUser = null;
        this.currentChat = null;
        this.currentChatType = 'user';
        this.db = firebase.database();
        this._msgRef = null;
        this._msgListener = null;
        this.replyingTo = null;
        this.emojiPickerOpen = false;
        this.loadCurrentUser();
        this.initializeEventListeners();
        this.render();
        showEmojiCategory('smileys');
        this.cleanupOldMessages();
    }

    loadCurrentUser() {
        const stored = sessionStorage.getItem('current_user');
        if (stored) this.currentUser = JSON.parse(stored);
    }

    saveCurrentUser() {
        if (this.currentUser) sessionStorage.setItem('current_user', JSON.stringify(this.currentUser));
    }

    async signup(username, password) {
        if (!username || !password) return { success: false, error: 'Username and password required' };
        if (username.length < 3) return { success: false, error: 'Username must be at least 3 characters' };
        if (password.length < 6) return { success: false, error: 'Password must be at least 6 characters' };
        if (/[.#$\[\]]/.test(username)) return { success: false, error: 'Username cannot contain . # $ [ or ] characters' };
        const snapshot = await this.db.ref('users/' + username).get();
        if (snapshot.exists()) return { success: false, error: 'Username already exists' };
        await this.db.ref('users/' + username).set({ username, password, createdAt: new Date().toISOString() });
        this.currentUser = { username };
        this.saveCurrentUser();
        return { success: true };
    }

    async login(username, password) {
        if (/[.#$\[\]]/.test(username)) return { success: false, error: 'Username cannot contain . # $ [ or ] characters' };
        const snapshot = await this.db.ref('users/' + username).get();
        if (!snapshot.exists()) return { success: false, error: 'User not found' };
        const user = snapshot.val();
        if (user.password !== password) return { success: false, error: 'Incorrect password' };
        this.currentUser = { username };
        this.saveCurrentUser();
        return { success: true };
    }

    logout() {
        this.detachMessageListener();
        this.currentUser = null;
        this.currentChat = null;
        this.currentChatType = 'user';
        this.replyingTo = null;
        sessionStorage.removeItem('current_user');
        this.render();
    }

    async getFriendsForCurrent() {
        if (!this.currentUser) return [];
        const snap = await this.db.ref('friends/' + this.currentUser.username).get();
        return snap.exists() ? Object.keys(snap.val()) : [];
    }

    async sendFriendRequest(toUsername) {
        if (!this.currentUser) return { success: false, error: 'Not logged in' };
        const userSnap = await this.db.ref('users/' + toUsername).get();
        if (!userSnap.exists()) return { success: false, error: 'User not found' };
        if (toUsername === this.currentUser.username) return { success: false, error: 'Cannot friend yourself' };
        const friendSnap = await this.db.ref('friends/' + this.currentUser.username + '/' + toUsername).get();
        if (friendSnap.exists()) return { success: false, error: 'Already friends' };
        const reqSnap = await this.db.ref('friendRequests/' + toUsername + '/' + this.currentUser.username).get();
        if (reqSnap.exists()) return { success: false, error: 'Request already sent' };
        await this.db.ref('friendRequests/' + toUsername + '/' + this.currentUser.username).set(true);
        await this.db.ref('outgoingRequests/' + this.currentUser.username + '/' + toUsername).set(true);
        return { success: true };
    }

    async getFriendRequestsForCurrent() {
        if (!this.currentUser) return [];
        const snap = await this.db.ref('friendRequests/' + this.currentUser.username).get();
        return snap.exists() ? Object.keys(snap.val()) : [];
    }

    async getOutgoingFriendRequests() {
        if (!this.currentUser) return [];
        const snap = await this.db.ref('outgoingRequests/' + this.currentUser.username).get();
        return snap.exists() ? Object.keys(snap.val()) : [];
    }

    async acceptFriendRequest(fromUsername) {
        if (!this.currentUser) return { success: false, error: 'Not logged in' };
        await this.db.ref('friendRequests/' + this.currentUser.username + '/' + fromUsername).remove();
        await this.db.ref('outgoingRequests/' + fromUsername + '/' + this.currentUser.username).remove();
        await this.db.ref('friends/' + this.currentUser.username + '/' + fromUsername).set(true);
        await this.db.ref('friends/' + fromUsername + '/' + this.currentUser.username).set(true);
        return { success: true };
    }

    async declineFriendRequest(fromUsername) {
        if (!this.currentUser) return;
        await this.db.ref('friendRequests/' + this.currentUser.username + '/' + fromUsername).remove();
        await this.db.ref('outgoingRequests/' + fromUsername + '/' + this.currentUser.username).remove();
    }

    async cancelFriendRequest(toUsername) {
        if (!this.currentUser) return;
        await this.db.ref('friendRequests/' + toUsername + '/' + this.currentUser.username).remove();
        await this.db.ref('outgoingRequests/' + this.currentUser.username + '/' + toUsername).remove();
    }

    async removeFriend(username) {
        if (!this.currentUser) return;
        await this.db.ref('friends/' + this.currentUser.username + '/' + username).remove();
    }

    getConversationKey(user1, user2) {
        return [user1, user2].sort().join('_');
    }

    async saveMessage(from, to, content) {
        const key = this.getConversationKey(from, to);
        const msg = Object.assign({ from, to, timestamp: new Date().toISOString() }, content);
        await this.db.ref('messages/' + key).push(msg);
        await this.db.ref('userConversations/' + from + '/' + to).set(true);
        await this.db.ref('userConversations/' + to + '/' + from).set(true);
    }

    async getDirectConversations() {
        const snap = await this.db.ref('userConversations/' + this.currentUser.username).get();
        const fromConvos = snap.exists() ? Object.keys(snap.val()) : [];
        const friends = await this.getFriendsForCurrent();
        return Array.from(new Set([...fromConvos, ...friends])).sort();
    }

    async deleteConversation(username) {
        if (!confirm('Delete all messages with @' + username + '?')) return;
        const key = this.getConversationKey(this.currentUser.username, username);
        await this.db.ref('messages/' + key).remove();
        await this.db.ref('userConversations/' + this.currentUser.username + '/' + username).remove();
        if (this.currentChat === username) {
            this.currentChat = null;
            this.detachMessageListener();
        }
        await this.updateAppUI();
    }

    async getUserRooms() {
        const snap = await this.db.ref('userRooms/' + this.currentUser.username).get();
        return snap.exists() ? Object.keys(snap.val()).sort() : [];
    }

    async createRoom(roomName, password) {
        const existing = await this.db.ref('rooms/' + roomName).get();
        if (existing.exists()) return { success: false, error: 'Room already exists' };
        if (!password) return { success: false, error: 'Password required to create room' };
        await this.db.ref('rooms/' + roomName).set({ password, createdAt: new Date().toISOString() });
        await this.db.ref('rooms/' + roomName + '/participants/' + this.currentUser.username).set(true);
        await this.db.ref('userRooms/' + this.currentUser.username + '/' + roomName).set(true);
        return { success: true };
    }

    async joinRoom(roomName, password) {
        const snap = await this.db.ref('rooms/' + roomName).get();
        if (!snap.exists()) return { success: false, error: 'Room not found' };
        const room = snap.val();
        if (room.password !== password) return { success: false, error: 'Incorrect room password' };
        await this.db.ref('rooms/' + roomName + '/participants/' + this.currentUser.username).set(true);
        await this.db.ref('userRooms/' + this.currentUser.username + '/' + roomName).set(true);
        return { success: true };
    }

    async leaveRoom(roomName) {
        await this.db.ref('rooms/' + roomName + '/participants/' + this.currentUser.username).remove();
        await this.db.ref('userRooms/' + this.currentUser.username + '/' + roomName).remove();
        const partSnap = await this.db.ref('rooms/' + roomName + '/participants').get();
        if (!partSnap.exists()) await this.db.ref('rooms/' + roomName).remove();
        if (this.currentChat === roomName && this.currentChatType === 'room') {
            this.currentChat = null;
            this.currentChatType = 'user';
            this.detachMessageListener();
        }
        await this.updateAppUI();
    }

    async saveRoomMessage(roomName, from, content) {
        const msg = Object.assign({ from, timestamp: new Date().toISOString() }, content);
        await this.db.ref('rooms/' + roomName + '/messages').push(msg);
    }

    async inviteFriendToRoom(friend) {
        if (!this.currentChat || this.currentChatType !== 'room') return { success: false, error: 'Not in room' };
        const snap = await this.db.ref('rooms/' + this.currentChat + '/participants/' + friend).get();
        if (snap.exists()) return { success: false, error: 'Already in room' };
        await this.db.ref('rooms/' + this.currentChat + '/participants/' + friend).set(true);
        await this.db.ref('userRooms/' + friend + '/' + this.currentChat).set(true);
        return { success: true };
    }

    // =====================
    // Members Modal
    // =====================

    async showMembersModal() {
        if (!this.currentChat || this.currentChatType !== 'room') return;
        const snap = await this.db.ref('rooms/' + this.currentChat + '/participants').get();
        const members = snap.exists() ? Object.keys(snap.val()).sort() : [];
        const list = document.getElementById('membersList');
        list.innerHTML = '';
        members.forEach(member => {
            const item = document.createElement('div');
            item.className = 'member-item';
            const avatar = document.createElement('div');
            avatar.className = 'member-avatar';
            avatar.textContent = member.charAt(0).toUpperCase();
            const name = document.createElement('span');
            name.textContent = '@' + member;
            item.appendChild(avatar);
            item.appendChild(name);
            if (member === this.currentUser.username) {
                const badge = document.createElement('span');
                badge.className = 'member-you-badge';
                badge.textContent = 'You';
                item.appendChild(badge);
            }
            list.appendChild(item);
        });
        document.getElementById('membersModal').classList.remove('hidden');
    }

    closeMembersModal() {
        document.getElementById('membersModal').classList.add('hidden');
    }

    // =====================
    // Cleanup (max once per hour)
    // =====================

    async cleanupOldMessages() {
        const lastCleanup = sessionStorage.getItem('lastCleanup');
        const now = Date.now();
        if (lastCleanup && now - parseInt(lastCleanup) < 60 * 60 * 1000) return;
        sessionStorage.setItem('lastCleanup', now.toString());
        const cutoff = now - (24 * 60 * 60 * 1000);
        try {
            const msgsSnap = await this.db.ref('messages').get();
            if (msgsSnap.exists()) {
                msgsSnap.forEach(convo => {
                    convo.forEach(msg => {
                        if (new Date(msg.val().timestamp).getTime() < cutoff) msg.ref.remove();
                    });
                });
            }
        } catch (e) { console.log('Cleanup error (messages):', e); }
        try {
            const roomsSnap = await this.db.ref('rooms').get();
            if (roomsSnap.exists()) {
                roomsSnap.forEach(room => {
                    room.child('messages').forEach(msg => {
                        if (new Date(msg.val().timestamp).getTime() < cutoff) msg.ref.remove();
                    });
                });
            }
        } catch (e) { console.log('Cleanup error (rooms):', e); }
    }

    // =====================
    // Message Listener
    // =====================

    attachMessageListener() {
        this.detachMessageListener();
        if (!this.currentChat) return;
        let ref;
        if (this.currentChatType === 'room') {
            ref = this.db.ref('rooms/' + this.currentChat + '/messages');
        } else {
            const key = this.getConversationKey(this.currentUser.username, this.currentChat);
            ref = this.db.ref('messages/' + key);
        }
        const listener = ref.on('value', (snapshot) => {
            const val = snapshot.val();
            const msgs = val ? Object.values(val).sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp)) : [];
            this.renderMessagesFromData(msgs);
        });
        this._msgRef = ref;
        this._msgListener = listener;
    }

    detachMessageListener() {
        if (this._msgRef && this._msgListener) {
            this._msgRef.off('value', this._msgListener);
            this._msgRef = null;
            this._msgListener = null;
        }
    }

    // =====================
    // Render
    // =====================

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

    async updateAppUI() {
        this.updateCurrentUserDisplay();
        await this.updateFriendsList();
        await this.updateConversationsList();
        await this.updateChatView();
    }

    updateCurrentUserDisplay() {
        const display = document.getElementById('currentUserDisplay');
        if (display) display.textContent = '@' + this.currentUser.username;
    }

    async updateFriendsList() {
        const list = document.getElementById('friendsList');
        const datalist = document.getElementById('friendList');
        const inviteSelect = document.getElementById('inviteFriendSelect');
        const reqList = document.getElementById('friendRequestsList');
        if (!list || !datalist || !inviteSelect || !reqList) return;

        const [friends, requests, outgoing] = await Promise.all([
            this.getFriendsForCurrent(),
            this.getFriendRequestsForCurrent(),
            this.getOutgoingFriendRequests()
        ]);

        list.innerHTML = '';
        datalist.innerHTML = '';
        inviteSelect.innerHTML = '';
        reqList.innerHTML = '';

        if (requests.length > 0) {
            const header = document.createElement('div');
            header.style.cssText = 'font-size:11px;color:#333;margin-bottom:3px;font-weight:600;padding:4px 0 2px 0;';
            header.textContent = 'Incoming Requests';
            reqList.appendChild(header);
            requests.forEach(from => {
                const item = document.createElement('div');
                item.className = 'request-item';
                item.textContent = '@' + from;
                const accept = document.createElement('button');
                accept.className = 'request-button';
                accept.textContent = 'Accept';
                accept.onclick = async () => { await this.acceptFriendRequest(from); await this.updateFriendsList(); };
                const decline = document.createElement('button');
                decline.className = 'request-button decline';
                decline.textContent = 'Decline';
                decline.onclick = async () => { await this.declineFriendRequest(from); await this.updateFriendsList(); };
                item.appendChild(accept);
                item.appendChild(decline);
                reqList.appendChild(item);
            });
        }

        if (outgoing.length > 0) {
            const hdr2 = document.createElement('div');
            hdr2.style.cssText = 'font-size:11px;color:#333;margin-bottom:3px;font-weight:600;padding:4px 0 2px 0;';
            hdr2.textContent = 'Pending (sent)';
            reqList.appendChild(hdr2);
            outgoing.forEach(to => {
                const item = document.createElement('div');
                item.className = 'request-item';
                item.textContent = '@' + to;
                const cancel = document.createElement('button');
                cancel.className = 'request-button decline';
                cancel.textContent = 'Cancel';
                cancel.onclick = async () => { await this.cancelFriendRequest(to); await this.updateFriendsList(); };
                item.appendChild(cancel);
                reqList.appendChild(item);
            });
        }

        friends.forEach(f => {
            const item = document.createElement('div');
            item.className = 'friend-item';
            item.textContent = '@' + f;
            const rm = document.createElement('button');
            rm.className = 'friend-remove';
            rm.textContent = '×';
            rm.onclick = async () => { await this.removeFriend(f); await this.updateFriendsList(); };
            item.appendChild(rm);
            list.appendChild(item);
            const opt = document.createElement('option'); opt.value = f; datalist.appendChild(opt);
            const invOpt = document.createElement('option'); invOpt.value = f; inviteSelect.appendChild(invOpt);
        });
    }

    async handleAddFriend(name) {
        const errorEl = document.getElementById('addFriendError');
        if (!name) return;
        try {
            const result = await this.sendFriendRequest(name);
            if (result.success) {
                document.getElementById('addFriendInput').value = '';
                if (errorEl) { errorEl.style.color = '#667eea'; errorEl.textContent = 'Request sent!'; }
                await this.updateFriendsList();
            } else {
                if (errorEl) { errorEl.style.color = '#ff6b6b'; errorEl.textContent = result.error; }
            }
        } catch (err) {
            if (errorEl) { errorEl.style.color = '#ff6b6b'; errorEl.textContent = 'Error: ' + err.message; }
        }
    }

    async handleInviteFriend() {
        const select = document.getElementById('inviteFriendSelect');
        const friend = select.value;
        if (!friend) return;
        if (this.currentChatType !== 'room' || !this.currentChat) { alert('No room selected'); return; }
        try {
            const res = await this.inviteFriendToRoom(friend);
            if (!res.success) { alert(res.error); } else { alert('@' + friend + ' invited to room'); await this.updateAppUI(); }
        } catch (err) {
            alert('Error: ' + err.message);
        }
    }

    async updateConversationsList() {
        const list = document.getElementById('conversationsList');
        list.innerHTML = '';
        const [directUsers, rooms] = await Promise.all([
            this.getDirectConversations(),
            this.getUserRooms()
        ]);
        const conversations = [
            ...rooms.map(r => ({ name: r, type: 'room' })),
            ...directUsers.map(u => ({ name: u, type: 'user' }))
        ];
        if (conversations.length === 0) {
            list.innerHTML = '<p style="color:#999;padding:15px 5px;text-align:center;font-size:12px;">No conversations yet</p>';
            return;
        }
        conversations.forEach(conv => {
            const { name, type } = conv;
            const item = document.createElement('div');
            item.className = 'conversation-item';
            if (this.currentChat === name && this.currentChatType === type) item.classList.add('active');
            const nameSpan = document.createElement('span');
            nameSpan.className = 'conversation-name';
            nameSpan.textContent = (type === 'room' ? '#' : '@') + name;
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'conversation-delete';
            deleteBtn.textContent = type === 'room' ? 'Leave' : 'Del';
            deleteBtn.onclick = async (e) => {
                e.stopPropagation();
                if (type === 'room') { await this.leaveRoom(name); } else { await this.deleteConversation(name); }
            };
            item.onclick = () => this.selectChat(name, type);
            item.appendChild(nameSpan);
            item.appendChild(deleteBtn);
            list.appendChild(item);
        });
    }

    async selectChat(name, type = 'user') {
        this.currentChat = name;
        this.currentChatType = type;
        this.replyingTo = null;
        this.closeEmojiPicker();
        this.attachMessageListener();
        await this.updateAppUI();
    }

    async updateChatView() {
        const noChatSelected = document.getElementById('noChatSelected');
        const chatView = document.getElementById('chatView');
        const membersBtn = document.getElementById('membersBtn');
        if (!this.currentChat) {
            noChatSelected.classList.remove('hidden');
            chatView.classList.add('hidden');
            return;
        }
        noChatSelected.classList.add('hidden');
        chatView.classList.remove('hidden');
        document.getElementById('chatWith').textContent = (this.currentChatType === 'room' ? '#' : '@') + this.currentChat;

        // Show Members button only in rooms
        if (membersBtn) membersBtn.classList.toggle('hidden', this.currentChatType !== 'room');

        const inviteSection = document.getElementById('roomInviteSection');
        if (this.currentChatType === 'room' && inviteSection) {
            const friends = await this.getFriendsForCurrent();
            const partSnap = await this.db.ref('rooms/' + this.currentChat + '/participants').get();
            const participants = partSnap.exists() ? Object.keys(partSnap.val()) : [];
            const avail = friends.filter(f => !participants.includes(f));
            inviteSection.classList.toggle('hidden', avail.length === 0);
        } else if (inviteSection) {
            inviteSection.classList.add('hidden');
        }
    }

    // =====================
    // Clickable Links Helper
    // =====================

    linkifyText(text) {
        // Matches http/https URLs and bare www. URLs
        const urlRegex = /(https?:\/\/[^\s]+)|(www\.[^\s]+)/gi;
        const parts = text.split(urlRegex);
        const fragment = document.createDocumentFragment();
        // rebuild — split gives alternating text/match groups
        let remaining = text;
        let match;
        let lastIndex = 0;
        const regex = /(https?:\/\/[^\s]+)|(www\.[^\s]+)/gi;
        while ((match = regex.exec(text)) !== null) {
            if (match.index > lastIndex) {
                fragment.appendChild(document.createTextNode(text.slice(lastIndex, match.index)));
            }
            const url = match[0];
            const href = url.startsWith('http') ? url : 'https://' + url;
            const a = document.createElement('a');
            a.href = href;
            a.textContent = url;
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
            fragment.appendChild(a);
            lastIndex = match.index + url.length;
        }
        if (lastIndex < text.length) {
            fragment.appendChild(document.createTextNode(text.slice(lastIndex)));
        }
        return fragment;
    }

    // =====================
    // Reply
    // =====================

    setReply(msg) {
        this.replyingTo = msg;
        document.getElementById('replyBar').classList.remove('hidden');
        document.getElementById('replyToName').textContent = msg.from === this.currentUser.username ? 'yourself' : '@' + msg.from;
        document.getElementById('replyPreviewText').textContent = msg.type === 'file' ? (msg.filename || 'image') : (msg.text ? msg.text.substring(0, 60) : '');
        document.getElementById('messageInput').focus();
    }

    cancelReply() {
        this.replyingTo = null;
        document.getElementById('replyBar').classList.add('hidden');
    }

    // =====================
    // Emoji
    // =====================

    toggleEmojiPicker() {
        const picker = document.getElementById('emojiPicker');
        this.emojiPickerOpen = !this.emojiPickerOpen;
        picker.classList.toggle('hidden', !this.emojiPickerOpen);
    }

    closeEmojiPicker() {
        this.emojiPickerOpen = false;
        const picker = document.getElementById('emojiPicker');
        if (picker) picker.classList.add('hidden');
    }

    insertEmoji(emoji) {
        const input = document.getElementById('messageInput');
        const start = input.selectionStart;
        const end = input.selectionEnd;
        input.value = input.value.substring(0, start) + emoji + input.value.substring(end);
        input.selectionStart = input.selectionEnd = start + emoji.length;
        input.focus();
    }

    // =====================
    // Render Messages
    // =====================

    renderMessagesFromData(messages) {
        const container = document.getElementById('messagesContainer');
        if (!container) return;
        container.innerHTML = '';
        if (messages.length === 0) {
            const placeholder = document.createElement('div');
            placeholder.style.cssText = 'color:#999;text-align:center;margin-top:20px;font-size:14px;';
            placeholder.textContent = 'No messages yet';
            container.appendChild(placeholder);
            return;
        }
        messages.forEach(msg => {
            const sent = this.currentUser && msg.from &&
                msg.from.toLowerCase() === this.currentUser.username.toLowerCase();
            const messageDiv = document.createElement('div');
            messageDiv.className = 'message ' + (sent ? 'sent' : 'received');

            const senderDiv = document.createElement('div');
            senderDiv.className = 'message-sender';
            senderDiv.textContent = sent ? 'You' : '@' + msg.from;
            messageDiv.appendChild(senderDiv);

            const bubble = document.createElement('div');
            bubble.className = 'message-bubble';

            // Reply quote
            if (msg.replyTo) {
                const quote = document.createElement('div');
                quote.className = 'reply-quote';
                const quoteAuthor = document.createElement('div');
                quoteAuthor.className = 'reply-quote-author';
                quoteAuthor.textContent = msg.replyTo.from === this.currentUser.username ? 'You' : '@' + msg.replyTo.from;
                const quoteText = document.createElement('div');
                quoteText.className = 'reply-quote-text';
                quoteText.textContent = msg.replyTo.type === 'file' ? (msg.replyTo.filename || 'image') : (msg.replyTo.text || '');
                quote.appendChild(quoteAuthor);
                quote.appendChild(quoteText);
                bubble.appendChild(quote);
            }

            // Content
            if (msg.type === 'file') {
                const imgSrc = msg.downloadURL || (msg.data && msg.data.startsWith('data:image') ? msg.data : null);
                if (imgSrc && (msg.isImage || (msg.data && msg.data.startsWith('data:image')))) {
                    const img = document.createElement('img');
                    img.src = imgSrc;
                    img.style.cssText = 'max-width:100%;width:250px;border-radius:8px;cursor:pointer;display:block;';
                    img.title = 'Tap to view full size';
                    img.onclick = () => {
                        const overlay = document.createElement('div');
                        overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.9);display:flex;align-items:center;justify-content:center;z-index:9999;cursor:pointer;';
                        const fullImg = document.createElement('img');
                        fullImg.src = imgSrc;
                        fullImg.style.cssText = 'max-width:95%;max-height:95%;object-fit:contain;border-radius:8px;';
                        overlay.appendChild(fullImg);
                        overlay.onclick = () => document.body.removeChild(overlay);
                        document.body.appendChild(overlay);
                    };
                    bubble.appendChild(img);
                    const fname = document.createElement('div');
                    fname.textContent = msg.filename;
                    fname.style.cssText = 'font-size:11px;margin-top:4px;';
                    bubble.appendChild(fname);
                } else {
                    const link = document.createElement('a');
                    link.href = msg.downloadURL || msg.data || '#';
                    link.textContent = '📎 ' + (msg.filename || 'file');
                    link.download = msg.filename;
                    bubble.appendChild(link);
                }
            } else {
                // Text with clickable links
                bubble.appendChild(this.linkifyText(msg.text));
            }

            messageDiv.appendChild(bubble);

            const meta = document.createElement('div');
            meta.className = 'message-meta';
            const timestamp = document.createElement('div');
            timestamp.className = 'message-timestamp';
            timestamp.textContent = this.formatTime(new Date(msg.timestamp));
            const replyBtn = document.createElement('button');
            replyBtn.className = 'reply-btn';
            replyBtn.textContent = '↩ Reply';
            replyBtn.onclick = () => this.setReply(msg);
            if (sent) {
                meta.appendChild(replyBtn);
                meta.appendChild(timestamp);
            } else {
                meta.appendChild(timestamp);
                meta.appendChild(replyBtn);
            }
            messageDiv.appendChild(meta);
            container.appendChild(messageDiv);
        });
        setTimeout(() => { container.scrollTop = container.scrollHeight; }, 50);
    }

    formatTime(date) {
        const now = new Date();
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const msgDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        if (msgDate.getTime() === today.getTime()) {
            return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
        } else {
            return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        }
    }

    // =====================
    // Event Listeners
    // =====================

    initializeEventListeners() {
        document.getElementById('loginBtn').addEventListener('click', () => this.handleLogin());
        document.getElementById('signupBtn').addEventListener('click', () => this.handleSignup());
        document.getElementById('logoutBtn').addEventListener('click', () => this.logout());
        document.getElementById('sendBtn').addEventListener('click', () => this.handleSendMessage());
        document.getElementById('sendFileBtn').addEventListener('click', () => this.handleSendFile());
        document.getElementById('messageInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.handleSendMessage();
        });
        document.getElementById('startChatBtn').addEventListener('click', () => this.handleStartChat());
        document.getElementById('chatNameInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.handleStartChat();
        });
        document.getElementById('chatTypeSelect').addEventListener('change', (e) => {
            const pwInput = document.getElementById('chatPasswordInput');
            const helper = document.getElementById('roomHelperText');
            const startBtn = document.getElementById('startChatBtn');
            const val = e.target.value;
            if (val === 'room-create') {
                pwInput.classList.remove('hidden'); helper.classList.remove('hidden'); startBtn.textContent = 'Create Room';
            } else if (val === 'room-join') {
                pwInput.classList.remove('hidden'); helper.classList.remove('hidden'); startBtn.textContent = 'Join Room';
            } else {
                pwInput.classList.add('hidden'); pwInput.value = ''; helper.classList.add('hidden'); startBtn.textContent = 'Open Chat';
            }
        });
        document.getElementById('addFriendBtn').addEventListener('click', () => {
            this.handleAddFriend(document.getElementById('addFriendInput').value.trim());
        });
        document.getElementById('addFriendInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.handleAddFriend(document.getElementById('addFriendInput').value.trim());
        });
        document.getElementById('inviteFriendBtn').addEventListener('click', () => this.handleInviteFriend());
        document.getElementById('membersBtn').addEventListener('click', () => this.showMembersModal());
        document.getElementById('exportQrBtn').addEventListener('click', () => this.showQrExportModal());
        document.getElementById('importQrBtn').addEventListener('click', () => this.showQrImportModal());
        document.getElementById('downloadQrBtn').addEventListener('click', () => {
            const canvas = document.querySelector('#qrCodeContainer canvas');
            if (canvas) {
                const a = document.createElement('a');
                a.href = canvas.toDataURL('image/png');
                a.download = 'securemessage_qr.png';
                a.click();
            }
        });
        document.getElementById('stopScanBtn').addEventListener('click', () => this.stopScanner());
        document.getElementById('helpBtn').addEventListener('click', () => this.showHelpModal());
        document.getElementById('submitFeedbackBtn').addEventListener('click', () => this.submitFeedback());
        document.getElementById('emojiBtn').addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleEmojiPicker();
        });
        document.addEventListener('click', (e) => {
            const picker = document.getElementById('emojiPicker');
            const btn = document.getElementById('emojiBtn');
            if (picker && !picker.contains(e.target) && e.target !== btn) {
                this.closeEmojiPicker();
            }
        });
    }

    async handleLogin() {
        const username = document.getElementById('loginUsername').value.trim();
        const password = document.getElementById('loginPassword').value;
        const errorDiv = document.getElementById('loginError');
        errorDiv.textContent = 'Logging in...';
        try {
            const result = await this.login(username, password);
            if (result.success) {
                document.getElementById('loginUsername').value = '';
                document.getElementById('loginPassword').value = '';
                errorDiv.textContent = '';
                this.render();
            } else {
                errorDiv.textContent = result.error;
            }
        } catch (err) {
            errorDiv.textContent = 'Error: ' + err.message;
        }
    }

    async handleSignup() {
        const username = document.getElementById('signupUsername').value.trim();
        const password = document.getElementById('signupPassword').value;
        const password2 = document.getElementById('signupPassword2').value;
        const errorDiv = document.getElementById('signupError');
        errorDiv.textContent = 'Signing up...';
        try {
            if (password !== password2) { errorDiv.textContent = 'Passwords do not match'; return; }
            const result = await this.signup(username, password);
            if (result.success) {
                document.getElementById('signupUsername').value = '';
                document.getElementById('signupPassword').value = '';
                document.getElementById('signupPassword2').value = '';
                errorDiv.textContent = '';
                this.render();
            } else {
                errorDiv.textContent = result.error;
            }
        } catch (err) {
            errorDiv.textContent = 'Error: ' + err.message;
        }
    }

    async handleSendMessage() {
        const input = document.getElementById('messageInput');
        const text = input.value;
        if (!text.trim() || !this.currentChat) return;
        this.closeEmojiPicker();

        // /evan command — sends a random Evan image as BOT
        if (text.trim().toLowerCase() === '/evan') {
            const lastEvan = sessionStorage.getItem('lastEvan');
            const cooldown = 30 * 1000;
            if (lastEvan && Date.now() - parseInt(lastEvan) < cooldown) {
                const remaining = Math.ceil((cooldown - (Date.now() - parseInt(lastEvan))) / 1000);
                alert('\u23f3 Slow down! You can use /evan again in ' + remaining + ' seconds.');
                input.value = '';
                return;
            }
            sessionStorage.setItem('lastEvan', Date.now().toString());
            input.value = '';
            const num = Math.floor(Math.random() * 8) + 1;
            const imageUrl = 'https://willvlam.github.io/Messaging-app/evan/' + num + '.png';
            const botMsg = {
                type: 'file',
                filename: 'evan' + num + '.png',
                downloadURL: imageUrl,
                isImage: true,
                from: 'BOT',
                timestamp: new Date().toISOString()
            };
            try {
                if (this.currentChatType === 'room') {
                    await this.db.ref('rooms/' + this.currentChat + '/messages').push(botMsg);
                } else {
                    const key = this.getConversationKey(this.currentUser.username, this.currentChat);
                    await this.db.ref('messages/' + key).push(botMsg);
                    await this.db.ref('userConversations/' + this.currentUser.username + '/' + this.currentChat).set(true);
                    await this.db.ref('userConversations/' + this.currentChat + '/' + this.currentUser.username).set(true);
                }
            } catch (err) {
                alert('Failed to send: ' + err.message);
            }
            return;
        }

        const content = { type: 'text', text };
        if (this.replyingTo) {
            content.replyTo = {
                from: this.replyingTo.from,
                text: this.replyingTo.text || null,
                filename: this.replyingTo.filename || null,
                type: this.replyingTo.type
            };
        }
        try {
            if (this.currentChatType === 'room') {
                await this.saveRoomMessage(this.currentChat, this.currentUser.username, content);
            } else {
                await this.saveMessage(this.currentUser.username, this.currentChat, content);
            }
            input.value = '';
            this.cancelReply();
        } catch (err) {
            alert('Failed to send message: ' + err.message);
        }
    }

    async handleSendFile() {
        const fileInput = document.getElementById('fileInput');
        if (!(fileInput && fileInput.files && fileInput.files[0]) || !this.currentChat) return;
        const file = fileInput.files[0];
        if (file.size > 5 * 1024 * 1024) { alert('File too large (max 5MB)'); fileInput.value = ''; return; }
        const reader = new FileReader();
        reader.onload = async (e) => {
            const fileObj = { type: 'file', filename: file.name, data: e.target.result };
            if (this.replyingTo) {
                fileObj.replyTo = {
                    from: this.replyingTo.from,
                    text: this.replyingTo.text || null,
                    filename: this.replyingTo.filename || null,
                    type: this.replyingTo.type
                };
            }
            try {
                if (this.currentChatType === 'room') {
                    await this.saveRoomMessage(this.currentChat, this.currentUser.username, fileObj);
                } else {
                    await this.saveMessage(this.currentUser.username, this.currentChat, fileObj);
                }
                this.cancelReply();
            } catch (err) {
                alert('Failed to save file: ' + err.message);
            }
            fileInput.value = '';
        };
        reader.onerror = () => alert('Failed to read file');
        reader.readAsDataURL(file);
    }

    async handleStartChat() {
        const type = document.getElementById('chatTypeSelect').value;
        const nameInput = document.getElementById('chatNameInput');
        const pwInput = document.getElementById('chatPasswordInput');
        const name = nameInput.value.replace(/^[@#]/, '').trim();
        const password = pwInput.value;
        if (!name) { alert('Please enter a name'); return; }
        try {
            if (type === 'user') {
                if (name === this.currentUser.username) { alert('Cannot chat with yourself'); return; }
                this.currentChatType = 'user';
                this.currentChat = name;
                nameInput.value = '';
                this.attachMessageListener();
                await this.updateAppUI();
            } else if (type === 'room-create') {
                if (!password) { alert('A password is required to create a room'); return; }
                const result = await this.createRoom(name, password);
                if (!result.success) { alert(result.error); return; }
                this.currentChatType = 'room';
                this.currentChat = name;
                nameInput.value = ''; pwInput.value = '';
                this.attachMessageListener();
                await this.updateAppUI();
            } else if (type === 'room-join') {
                if (!password) { alert('A password is required to join a room'); return; }
                const result = await this.joinRoom(name, password);
                if (!result.success) { alert(result.error); return; }
                this.currentChatType = 'room';
                this.currentChat = name;
                nameInput.value = ''; pwInput.value = '';
                this.attachMessageListener();
                await this.updateAppUI();
            }
        } catch (err) {
            alert('Error: ' + err.message);
        }
    }

    showQrExportModal() {
        document.getElementById('qrExportModal').classList.remove('hidden');
        const container = document.getElementById('qrCodeContainer');
        container.innerHTML = '';
        const qr = new QRious({
            element: document.createElement('canvas'),
            value: JSON.stringify({ username: this.currentUser.username }),
            size: 250
        });
        container.appendChild(qr.canvas);
    }

    closeQrExportModal() { document.getElementById('qrExportModal').classList.add('hidden'); }

    showQrImportModal() {
        document.getElementById('qrImportModal').classList.remove('hidden');
        this.startScanner();
    }

    closeQrImportModal() {
        document.getElementById('qrImportModal').classList.add('hidden');
        this.stopScanner();
    }

    startScanner() {
        if (this.html5QrCode) return;
        this.html5QrCode = new Html5Qrcode('qrReaderContainer');
        this.html5QrCode.start(
            { facingMode: 'environment' },
            { fps: 10, qrbox: 250 },
            qrMessage => {
                this.stopScanner();
                this.importData(qrMessage);
                this.closeQrImportModal();
            },
            err => console.log('scan error', err)
        ).catch(err => {
            console.error('Unable to start scanner', err);
            document.getElementById('qrStatus').textContent = 'Camera not available';
        });
    }

    stopScanner() {
        if (this.html5QrCode) {
            this.html5QrCode.stop().then(() => {
                this.html5QrCode.clear();
                this.html5QrCode = null;
            }).catch(err => console.error('Error stopping scanner', err));
        }
    }

    importData(json) {
        try {
            const data = JSON.parse(json);
            if (data.username) {
                document.getElementById('chatNameInput').value = data.username;
                alert('Scanned @' + data.username + ' — you can now open a chat with them!');
            }
        } catch (e) {
            alert('Failed to parse QR data');
        }
    }

    showHelpModal() { document.getElementById('helpModal').classList.remove('hidden'); }

    closeHelpModal() {
        document.getElementById('helpModal').classList.add('hidden');
        document.getElementById('feedbackSubject').value = '';
        document.getElementById('feedbackMessage').value = '';
        document.getElementById('feedbackStatus').textContent = '';
    }

    async submitFeedback() {
        const type = document.getElementById('feedbackType').value;
        const subject = document.getElementById('feedbackSubject').value.trim();
        const message = document.getElementById('feedbackMessage').value.trim();
        const status = document.getElementById('feedbackStatus');
        if (!subject || !message) {
            status.style.color = '#ff6b6b';
            status.textContent = 'Please fill in both subject and message.';
            return;
        }
        try {
            await this.db.ref('feedback').push({
                type, subject, message,
                from: this.currentUser ? this.currentUser.username : 'anonymous',
                timestamp: new Date().toISOString()
            });
            status.style.color = '#667eea';
            status.textContent = 'Feedback submitted, thank you!';
            document.getElementById('feedbackSubject').value = '';
            document.getElementById('feedbackMessage').value = '';
        } catch (err) {
            status.style.color = '#ff6b6b';
            status.textContent = 'Error submitting: ' + err.message;
        }
    }
}

// =====================
// Initialize App
// =====================

let app;

document.addEventListener('DOMContentLoaded', () => {
    app = new MessagingApp();
});

function toggleAuthForm(e) {
    e.preventDefault();
    document.getElementById('loginForm').classList.toggle('active');
    document.getElementById('signupForm').classList.toggle('active');
}

function toggleFriends() {
    const el = document.getElementById('friendsCollapsible');
    const icon = document.getElementById('friendsToggleIcon');
    el.classList.toggle('hidden');
    icon.textContent = el.classList.contains('hidden') ? '▼' : '▲';
}

function toggleNewChat() {
    const el = document.getElementById('newChatCollapsible');
    const icon = document.getElementById('newChatToggleIcon');
    el.classList.toggle('hidden');
    icon.textContent = el.classList.contains('hidden') ? '▼' : '▲';
}

function cancelReply() { if (app) app.cancelReply(); }
function closeQrExportModal() { if (app) app.closeQrExportModal(); }
function closeQrImportModal() { if (app) app.closeQrImportModal(); }
function closeHelpModal() { if (app) app.closeHelpModal(); }
function closeMembersModal() { if (app) app.closeMembersModal(); }

function showEmojiCategory(category) {
    const grid = document.getElementById('emojiGrid');
    if (!grid) return;
    grid.innerHTML = '';
    const emojis = EMOJI_CATEGORIES[category] || [];
    emojis.forEach(emoji => {
        const btn = document.createElement('button');
        btn.className = 'emoji-btn';
        btn.textContent = emoji;
        btn.onclick = (e) => { e.stopPropagation(); if (app) app.insertEmoji(emoji); };
        grid.appendChild(btn);
    });
    document.querySelectorAll('.emoji-tab').forEach(tab => tab.classList.remove('active'));
    const tabs = ['smileys','gestures','hearts','animals','food','activities','travel','symbols'];
    const idx = tabs.indexOf(category);
    const tabEls = document.querySelectorAll('.emoji-tab');
    if (tabEls[idx]) tabEls[idx].classList.add('active');
}