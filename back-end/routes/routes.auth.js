const express = require('express');
const router = express.Router();
const { login } = require('../controllers/controller.auth');

router.post('/auth/login', login);

module.exports = router;
