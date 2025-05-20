import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    avatar: {
        type: String,
        default: 'https://example.com/default-avatar.png', // Default avatar URL
    },
    role: {
    type: String,
    enum: ["user", "admin", "moderator"],
    default: "user",
},
  status: {
    type: String,
    enum: ["online", "offline", "away", "busy"],
    default: "offline",
}
,
lastSeen: {
    type: Date,
    default: Date.now,
}



},{
    timestamps: true,
});

const User = mongoose.model('User', userSchema);
export default User;    