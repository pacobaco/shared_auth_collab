const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const logoSchema = new Schema({
  team_id: { type: Schema.Types.ObjectId, ref: 'Team' },
  image_url: String,          // Can be external or uploaded
  votes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  submitted_by: { type: Schema.Types.ObjectId, ref: 'User' },
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Logo', logoSchema);
