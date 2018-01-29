const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');

const tokenForUser = user => {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
};

exports.signup = function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res.status(422).send({ error: 'Enter Email and Password' });
  }
  User.findOne({ email: email }, function(err, existingUser) {
    if (err) {
      return next(err);
    }
    if (existingUser) {
      return res.status(422).send({ error: 'Email exists' });
    }
  });

  const user = new User({
    email: email,
    password: password
  });

  user.save(function(err) {
    if (err) {
      return next(err);
    }
    res.json({ token: tokenForUser(user) });
  });
};
