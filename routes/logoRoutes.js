const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const logoController = require('../controllers/logoController');

router.post('/', auth, logoController.submitLogo);
router.put('/:logoId/vote', auth, logoController.voteLogo);
router.get('/team/:teamId', auth, logoController.getTeamLogos);

module.exports = router;
