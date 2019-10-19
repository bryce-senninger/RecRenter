const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.User.find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
  findById: function(req, res) {
    db.User.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
  create: function(req, res) {
    db.User.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
  update: function(req, res) {
    db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
  remove: function(req, res) {
    db.User.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
<<<<<<< HEAD
=======
  },
  login: function(req, res) {
    db.User.findOne(
      {
        username: req.body.username
      },
      function(err, user) {
        if (err) throw err;

        if (!user) {
          res.status(401).send({
            success: false,
            msg: "Authentication failed. User not found."
          });
        } else {
          // check if password matches
          db.User.comparePassword(req.body.password, function(err, isMatch) {
            if (isMatch && !err) {
              // if user is found and password is right create a token
              var token = jwt.sign(user.toJSON(), settings.secret);
              // return the information including token as JSON
              res.json({ success: true, token: "JWT " + token });
            } else {
              res.status(401).send({
                success: false,
                msg: "Authentication failed. Wrong password."
              });
            }
          });
        }
      }
    );
    // passport.authenticate("local", {
    //   successRedirect: "/",
    //   failureRedirect: "/user/login",
    //   failureFlash: true
    // });
>>>>>>> adding multer
  }
};
