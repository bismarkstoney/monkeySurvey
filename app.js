const dotenv = require('dotenv');
dotenv.config({});
const express = require('express');
const connectDB = require('./config/db/db');
//Client ID
//Client secret
connectDB();
//Not exporting anyting
require('./lib/passport');
const authRouter = require('./routes/authRouter');

const app = express();

const PORT = process.env.PORT || 5000;

app.use('/auth/google', authRouter);
app.listen(PORT, () => {
	console.log(`The server is running on ${PORT}`);
});
