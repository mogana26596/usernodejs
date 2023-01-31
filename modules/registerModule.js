const mongo = require('../connect');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.login = async (req,res,next) => {

    const savedResponse = await mongo.selectedDb.collection('users').insertOne({"email":"user123@gmail.com", "password":"user123"});
    let { email, password } = req.body;
    let existingUser = await mongo.selectedDb.collection('users').findOne({ email: email });
    let existingPassword = await mongo.selectedDb.collection('users').findOne({ password: password });
   
    if(!existingUser  && !existingPassword  ) 
    return res.status(400).send({msg: "You are not a registered admin"});
  
    let token = jwt.sign({ userId: existingUser.id, email: existingUser.email }, process.env.SECRET_KEY, {expiresIn : '1hr'});
    res.send(token);
};
