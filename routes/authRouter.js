const passport = require('passport');
const express = require('express');
const router = express.Router();

router.get(
	'/',

	passport.authenticate('google', {
		scope: ['profile', 'email'],
	})
);

router.get('/callback', passport.authenticate('google'));

router.get('/current_user', (req, res) => {
	res.send(req.user);
});

router.get('/logout', (req, res) => {
	req.logOut();
	res.send(req.user);
});

module.exports = router;
