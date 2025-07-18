const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: { type: String },
  isPublic: { type: Boolean, default: true },
  availability: [{ type: String }],
  skillsOffered: [{ type: String }],
  skillsWanted: [{ type: String }],
  createdAt: { type: Date, default: Date.now },
  role: { type: String, enum: ['user', 'admin'], default: 'user' }
});

module.exports = mongoose.models.User || mongoose.model('User', UserSchema); 