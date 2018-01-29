const passport = require('passport');
const Authentication = require('./controllers/authentication');
const PassportService = require('./services/passport');

const requireAuth = passport.authenticate('jwt', { session: false });

const routes = function(app) {
  app.get('/', requireAuth, function(req, res) {
    res.send({ hi: 'there' });
  });
  app.post('/signup', Authentication.signup);
};

module.exports = routes;
