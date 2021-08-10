const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const User = require('../models/user-model');

passport.use(
    new GoogleStrategy({
     //options for the google strat
     callbackURL: 'http://localhost:3000/auth/google/redirect',
     clientID: keys.google.clientID,
     clientSecret: keys.google.clientSecret
    }, (accessToken, refreshToken, profile, done) => {
    //passport callback fn
    console.log('profile>>>>>>>>>>>>>>>>>',profile);
    const query  = User.where({  googleId: profile.id });
    query.findOne(function (err, user) {
    if (err) return handleError(err);
    if (user) {
        // doc may be null if no document matched
        console.log('Exisiting user>>>' + user);
        // done(null, user);
    } else {
        //if not, create a user in db
        new User({
            username: profile.displayName,
            googleId: profile.id
        }).save().then((newUser) => {
            console.log('new user created:' + newUser);
            // done(null, newUser);
        });
    }
    });
    })
);

