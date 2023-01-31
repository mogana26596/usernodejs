const express = require('express');
const router = express.Router();
const user= require('../modules/userModule');

router.get('/get', user.getUser);

router.post('/create', user.createUser);

router.put('/update/:userId', user.updateUser);

router.delete('/delete/:userId', user.deleteUser);

module.exports = router;