const passport = require('passport');
const express = require('express');
const router = express.Router();

router.get(
	'/',

	passport.authenticate('google', {
		scope: ['profile', 'email'],
	})
);

// router.get(
// 	'/callback',
// 	passport.authenticate('google', {
// 		successRedirect: '/',
// 		failureRedirect: '/login',
// 	})
// );

router.get(
	'/callback',
	passport.authenticate('google', {
		successRedirect: '/',
		failureRedirect: '/login',
	})
);

router.get('/current_user', (req, res) => {
	res.send(req.user);
});

router.get('/logout', (req, res) => {
	req.logOut();
	res.send(req.user);
});

router.get(
	'/github',

	passport.authenticate('github', { scope: ['user:email'] })
);

router.get(
	'/github/callback',
	passport.authenticate('github', { failureRedirect: '/login' }),
	function (req, res) {
		// Successful authentication, redirect home.
		res.redirect('/');
	}
);
module.exports = router;
