const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: String,
  name: String,
  role: { type: String, enum: ['admin', 'editor', 'viewer'], default: 'viewer' },
  team_id: { type: Schema.Types.ObjectId, ref: 'Team' }
});

module.exports = mongoose.model('User', userSchema);