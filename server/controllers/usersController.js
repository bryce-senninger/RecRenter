const User = require("../models/user");
const passport = require("passport");

module.exports = {
  signup: function(req, res) {
    let body = req.body,
      username = body.username,
      password = body.password,
      email = body.email,
      firstname = body.firstname,
      lastname = body.lastname,
      phone = body.phone,
      city = body.city,
      state = body.state,
      zip = body.zip,
      imagePath = body.imagePath;

    User.findOne({ username: username }, function(err, doc) {
      if (err) {
        res.status(500).send("ERROR");
      } else if (doc) {
        res.status(500).send("Username already exists");
      } else {
        let record = new User();
        record.username = username;
        record.password = record.hashPassword(password);
        record.email = email;
        record.firstname = firstname;
        record.lastname = lastname;
        record.phone = phone;
        record.city = city;
        record.state = state;
        record.zip = zip;
        record.imagePath = imagePath;
        record.save(function(err, user) {
          if (err) {
            res.status(500).send("Username already exists");
          } else {
            res.send(user);
          }
          passport.authenticate("local", {
            failureRedirect: "/login",
            successRedirect: "/"
          }),
            function(req, res) {
              res.send("hey");
            };
        });
      }
    });
  },
  login: function() {
    pass("local", {
      successRedirect: "/",
      failureRedirect: "/login",
      failureFlash: true
    }),
      (err, res) => {
        if (err) {
          res.send(err);
        }
        res.send(user);
      };
  },
  findAll: function(req, res) {
    User.find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
  findById: function(req, res) {
    User.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },

  update: function(req, res) {
    User.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
  remove: function(req, res) {
    User.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  }
};
