import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  receiver: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: false }, // For direct chats
  chatRoom: { type: mongoose.Schema.Types.ObjectId, ref: "ChatRoom", required: false }, // For group chats
  content: { type: String, required: true },
  messageType: { type: String, enum: ["text", "image", "video", "file"], default: "text" }, // Supports multimedia
  timestamp: { type: Date, default: Date.now },
  isRead: { type: Boolean, default: false }, // Tracks read/unread status
});

const Message = mongoose.model("Message", messageSchema);
export default Message;
