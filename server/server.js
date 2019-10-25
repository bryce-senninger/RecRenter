const path = require("path");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const passport = require("passport");
const session = require("express-session");
const app = express();
const cloudinary = require("cloudinary");
var multipart = require("connect-multiparty");
var multipartMiddleware = multipart();
const PORT = process.env.PORT || 3001;

require("./passport")(passport);
const routes = require("./routes/index", passport);

cloudinary.config({
  cloud_name: "dqpccnwco",
  api_key: "442876256574885",
  api_secret: "9yurGnuwemrGwR90gIdL7d3_wdQ"
});

app.use(express.static("public"));
app.use(express.static(__dirname + "/itemImages"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(
  session({
    secret: "thesecret",
    saveUninitialized: false,
    resave: false
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(routes);

// REQUIRE MONGOOSE AND CONNECTION TO DATABASE //
const mongoose = require("mongoose");
const mongoURL = process.env.MONGODB_URI || "mongodb://localhost/RecRenter";

mongoose
  .connect(mongoURL, { useNewUrlParser: true, useFindAndModify: false })
  .then(() => {
    console.log("💻 ==> Database Connected!!");
  })
  .catch(err => {
    console.log(`Error connecting to Mongo: ${err}`);
  });

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
