const dotenv = require('dotenv');
dotenv.config({});
const express = require('express');
//Not exporting anyting
require('./lib/passport');
const authRouter = require('./routes/authRouter');
const coonnectDB = require('./config/db/db');

const app = express();

const PORT = process.env.PORT || 5000;
//Client ID
//Client secret
coonnectDB();

app.use('/auth/google', authRouter);
app.listen(PORT, () => {
	console.log(`The server is running on ${PORT}`);
});
