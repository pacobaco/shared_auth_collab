const Session = require('../models/Session');

exports.createSession = async (req, res) => {
  const session = new Session({
    user_id: req.user.id,
    team_id: req.user.team_id,
    title: req.body.title,
    messages: [],
    visibility: req.body.visibility || 'private'
  });
  await session.save();
  res.json(session);
};

exports.getTeamSessions = async (req, res) => {
  const sessions = await Session.find({ team_id: req.params.teamId, visibility: 'shared' });
  res.json(sessions);
};

exports.updateSessionVisibility = async (req, res) => {
  const session = await Session.findById(req.params.id);
  if (session && session.user_id.toString() === req.user.id) {
    session.visibility = req.body.visibility;
    await session.save();
    res.json(session);
  } else {
    res.status(403).json({ error: 'Not authorized' });
  }
};