const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const teamController = require('../controllers/teamController');

router.post('/', auth, teamController.createTeam);
router.post('/:teamId/invite', auth, teamController.inviteUser);

module.exports = router;