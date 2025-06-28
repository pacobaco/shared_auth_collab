const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const sessionController = require('../controllers/sessionController');
const teamAccess = require('../middleware/teamAccess');

router.post('/', auth, sessionController.createSession);
router.get('/team/:teamId', auth, teamAccess, sessionController.getTeamSessions);
router.put('/:id/share', auth, sessionController.updateSessionVisibility);

module.exports = router;