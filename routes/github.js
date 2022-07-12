const passport = require('passport');
const express = require('express');
const router = express.Router();

router.get('/current_user', (req, res) => {
	res.send(req.user);
});

router.get('/logout', (req, res) => {
	req.logOut();
	res.send(req.user);
});

router.get(
	'/',

	passport.authenticate('github', { scope: ['user:email'] })
);

router.get(
	'/callback',
	passport.authenticate('github', { failureRedirect: '/login' }),
	function (req, res) {
		// Successful authentication, redirect home.
		res.redirect('/');
	}
);
module.exports = router;
