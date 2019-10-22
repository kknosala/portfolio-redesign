var db = require('../models');

module.exports = function(app) {
    app.post("/contact/new", function(req, res) {
        db.Contact.create(req.body).then(function(results) {
          res.json(results);
        });
    });
}