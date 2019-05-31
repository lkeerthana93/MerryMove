module.exports = function (app) {

  var userModel = require("../models/user/user.model.server");

  app.post("/api/merryMove/register", register);

  function register(req, res) {
    var newUser = req.body;

    userModel
      .register(newUser)
      .then(function (user) {
        res.json(user);
      }, function (err) {
        res.sendStatus(404);
      });
  }
};

