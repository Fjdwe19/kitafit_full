const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { profile } = require('../controllers/userController');

router.get('/me', auth, profile);

module.exports = router;