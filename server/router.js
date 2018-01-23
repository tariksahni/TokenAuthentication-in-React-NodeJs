const Authentication = require('./controllers/authentication');

const routes = function(app) {
  app.post('/signup', Authentication.signup);
};

module.exports = routes;
