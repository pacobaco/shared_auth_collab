const User = require('../models/User');

module.exports = async (req, res, next) => {
  const user = await User.findById(req.user.id);
  if (!user || user.team_id.toString() !== req.params.teamId) {
    return res.status(403).json({ error: 'Access denied' });
  }
  next();
};