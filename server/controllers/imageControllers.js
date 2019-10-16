const db = require("../models");

module.exports = {
  upload: function(req, res) {
    db.collection("items").insertOne(finalImg, (err, result) => {
      console.log(result);

      if (err) return console.log(err);

      console.log("saved to database");
      res.redirect("/");
    });
  }
};
