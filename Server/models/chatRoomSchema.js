const chatRoomSchema = new mongoose.Schema({
  roomName: { type: String, required: true }, // For named group chats
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // List of users in the chat
  createdAt: { type: Date, default: Date.now },
  lastMessage: { type: mongoose.Schema.Types.ObjectId, ref: "Message" }, // Reference to last sent message
});

const ChatRoom = mongoose.model("ChatRoom", chatRoomSchema);
export default ChatRoom;
