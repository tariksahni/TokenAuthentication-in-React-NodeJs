const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

// set up options for JWT Strategy
const jwtOptions = {};

// create the strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
  User.findById(payload.sub, function(err, user) {
    if (err) return done(err, false);
    if (user) {
      return done(null, user);
    } else return done(null, false);
  });
});

// Tell passport to use this strategy
passport.use(jwtLogin);
