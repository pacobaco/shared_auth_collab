const Logo = require('../models/Logo');

exports.submitLogo = async (req, res) => {
  const logo = new Logo({
    team_id: req.body.team_id,
    image_url: req.body.image_url,
    submitted_by: req.user.id
  });
  await logo.save();
  res.json(logo);
};

exports.voteLogo = async (req, res) => {
  const logo = await Logo.findById(req.params.logoId);
  if (!logo.votes.includes(req.user.id)) {
    logo.votes.push(req.user.id);
    await logo.save();
  }
  res.json(logo);
};

exports.getTeamLogos = async (req, res) => {
  const logos = await Logo.find({ team_id: req.params.teamId }).sort({ votes: -1 });
  res.json(logos);
};
