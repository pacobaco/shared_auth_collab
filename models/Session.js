const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sessionSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: 'User' },
  team_id: { type: Schema.Types.ObjectId, ref: 'Team' },
  title: String,
  messages: [{
    role: String,
    content: String
  }],
  visibility: { type: String, enum: ['private', 'shared'], default: 'private' }
});

module.exports = mongoose.model('Session', sessionSchema);