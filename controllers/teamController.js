const Team = require('../models/Team');
const User = require('../models/User');

exports.createTeam = async (req, res) => {
  const team = new Team({ team_name: req.body.team_name, members: [req.user.id] });
  await team.save();
  res.json(team);
};

exports.inviteUser = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    user.team_id = req.params.teamId;
    await user.save();
    await Team.findByIdAndUpdate(req.params.teamId, { $push: { members: user._id } });
    res.json({ success: true });
  } else {
    res.status(404).json({ error: 'User not found' });
  }
};