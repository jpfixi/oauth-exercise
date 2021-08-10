const router = require('express').Router();
const passport = require('passport');

//auth login
router.get('/login', (req, res) => {
    res.render('login');
});

//auth logout
router.get('/logout', (req, res) => {
     //handle with passport
    res.send('logging out');
});

//auth with google - consent screen
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

//callback route for google to redirect to [with code in query string eg:code=4%2F0AX4XfWjSH1QDbz3Y8NM0RP_QtfmyOXKO1ismVq5k_LDPPrJ5ErwKXJyLg16sYkepsKQ4xA&scope=profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile]
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.send('you reached the callback URI');
});

module.exports = router;