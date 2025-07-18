const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
  team_name: String,
  members: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model('Team', teamSchema);