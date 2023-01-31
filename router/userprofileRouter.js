const express = require('express');
const router = express.Router();
const userprofile= require('../modules/userprofileModule');

router.get('/get', userprofile.getUserprofile);

router.post('/create', userprofile.createUserprofile);

router.put('/update/:userprofileId', userprofile.updateUserprofile);

router.delete('/delete/:userprofileId', userprofile.deleteUserprofile);

module.exports = router;