const routes = function(app) {
  app.get('/', function(req, res, next) {
    res.send(['react', 'redux']);
  });
};

module.exports = routes;
