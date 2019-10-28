const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
// const passport = require("passport");
const session = require("express-session");
const app = express();
const cors = require("cors");
const cloudinary = require("cloudinary");
const PORT = process.env.PORT || 3001;

// require("./server/passport")(passport);
const routes = require("./routes/index");

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
app.options("*", cors());
app.use(
  session({
    secret: "thesecret",
    saveUninitialized: false,
    resave: false
  })
);
// app.use(passport.initialize());
// app.use(passport.session());
app.use(routes);

// REQUIRE MONGOOSE AND CONNECTION TO DATABASE //
const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/RecRenter";

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useFindAndModify: false })
  .then(() => {
    console.log("💻 ==> Database Connected!!");
  })
  .catch(err => {
    console.log(`Error connecting to Mongo: ${err}`);
  });
console.log("process.env");
console.log(process.env);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
