// Dummy auth middleware for testing
module.exports = (req, res, next) => {
  // Simulate an authenticated user
  req.user = { id: '60f7f6f6f6f6f6f6f6f6f6f6', team_id: '60f7f6f6f6f6f6f6f6f6f6f7' };
  next();
};