module.exports = function (app) {
  var db = require("./models/model");
  require("./services/user.service.server")(app);
};
