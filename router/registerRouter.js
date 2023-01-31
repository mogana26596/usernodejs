const express = require('express');
const router = express.Router();
const register = require('../modules/registerModule');

router.post('/login', register.login);

module.exports = router;