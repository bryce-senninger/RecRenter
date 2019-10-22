const router = require("express").Router();
const loginController = require("../../controllers/loginController");

// const User = require("../../models/user");

router
  // Lines up with /auth/login
  .route("/")
  .get(loginController.getLogin)
  .post(loginController.postLogin);

module.exports = router;
// router.get("/", function(req, res, next) {
//   res.render("login");
// });
// router.get("/", function(req, res, next) {
//   res.render("signup");
// });

// module.exports = function(passport) {
//   router.post("/", function(req, res) {
//     let body = req.body,
//       username = body.username,
//       password = body.password;
//     User.findOne({ username: username }, function(err, doc) {
//       if (err) {
//         res.status(500).send("ERROR");
//       } else if (doc) {
//         res.status(500).send("Username already exists");
//       } else {
//         let record = new User();
//         record.username = username;
//         record.password = record.hashPassword(password);
//         record.save(function(err, user) {
//           if (err) {
//             res.status(500).send("Username already exists");
//           } else {
//             res.send(user);
//           }
//         });
//       }
//     });
//   });

//   router.post(
//     "/",
//     passport.authenticate("local", {
//       failureRedirect: "/login",
//       successRedirect: "/"
//     }),
//     function(req, res) {
//       res.send("hey");
//     }
//   );
//   return router;
// };
