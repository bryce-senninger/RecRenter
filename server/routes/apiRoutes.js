const db = require("../models");

module.exports = function(app) {
  app.post("/api/user", (req, res) => {
    db.User.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  });

  app.post("/api/item", (req, res) => {
    db.Item.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  });
};
