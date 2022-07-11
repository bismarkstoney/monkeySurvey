const dotenv = require('dotenv');
dotenv.config({});
const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
const connectDB = require('./config/db/db');
const app = express();
//Client ID
//Client secret
connectDB();
//Not exporting anyting
require('./lib/passport');

app.use(
	cookieSession({
		keys: [process.env.COOKIE_KEY],
		maxAge: 30 * 24 * 60 * 60 * 1000,
	})
);
app.use(passport.initialize());
app.use(passport.session());
const authRouter = require('./routes/authRouter');

const PORT = process.env.PORT || 5000;

app.use('/auth/google', authRouter);
app.listen(PORT, () => {
	console.log(`The server is running on ${PORT}`);
});
