const express = require('express');
const mongo = require('./connect');
const cors = require('cors');
const dotenv = require('dotenv');
const register1 = require('./router/registerRouter');
const user = require('./router/userRouter');
const userprofile = require('./router/userprofileRouter');

dotenv.config();
mongo.connect();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/register', register1);
app.use('/user', user);
app.use('/userprofile', userprofile);
app.listen(process.env.PORT);