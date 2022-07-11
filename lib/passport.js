const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const keys = require('../config/keys');
const User = require('../models/UserModel');

passport.serializeUser((user, done) => {
	done(null, user.googleID || user.id);
});

passport.deserializeUser(async (id, done) => {
	const user = await User.findOne({ googleID: id });
	console.log(user);
	done(null, user);
});

// passport.serializeUser((user, done) => {
//     done(null, user.googleId || user.id);
// });

// passport.deserializeUser((googleId, done) => {
//     database.findOne({ googleId : googleId }, (err, user) => {
//         done(null, user);
//     });
// });

passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback',
		},
		async (acessToken, refreshToken, profile, done) => {
			let existUser = await User.findOne({ googleID: profile.id });
			if (existUser) {
				done(null, existUser);
			} else {
				//console.log(profile.emails[0].value);
				const newUser = await User({
					googleID: profile.id,
					email: profile.emails[0].value,
				});
				done(null, newUser);
			}
		}
	)
);
