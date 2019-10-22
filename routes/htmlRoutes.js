var db = require("../models");

module.exports = function(app) {
  app.get("/", function(req, res) {
    db.Project.findAll({
      where: {
        displayFront: true
      },
      order: [["id", "DESC"]]
    }).then(response => {
      res.render("index", { recent: response });
    });
  });

  app.get("/portfolio", function(req, res) {
    db.Project.findAll({
      order: [["id", "DESC"]]
    }).then(response => {
      res.render("portfolio", { project: response });
    });
  });

  app.get("/contact", function(req, res) {
    res.render("contact");
  });
};
