const path = require("path");
const crypto = require("crypto");
const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const passport = require("passport");
const app = express();
const routes = require("./routes");

const PORT = process.env.PORT || 3001;

app.use(express.static("public"));
app.use(express.static(__dirname + "/itemImages"));

// app.use(session({ secret: "Charp", resave: true, saveUninitialized: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const mongoose = require("mongoose");
const mongoURL = process.env.MONGODB_URI || "mongodb://localhost/RecRenter";

const storage = multer.diskStorage({
  destination: "itemImages/",
  filename: function(req, file, callback) {
    crypto.pseudoRandomBytes(16, function(err, raw) {
      if (err) return callback(err);
      callback(null, raw.toString("hex") + path.extname(file.originalname));
    });
  }
});
const upload = multer({ storage: storage });
const sUpload = upload.single("image");

app.post("/uploadedphotos", sUpload, (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});

app.use(routes);

app.post("/uploadedphoto", (req, res) => {
  var img = fs.readFileSync(req.file.path);
  var encode_image = img.toString("base64");
  // Define a JSONobject for the image attributes for saving to database

  var finalImg = {
    contentType: req.file.mimetype,
    photo: new Buffer(encode_image, "base64")
  };
  db.collection("users").insertOne(finalImg, (err, result) => {
    console.log(result);

    if (err) return console.log(err);

    console.log("saved to database");
    res.redirect("/");
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

mongoose
  .connect(mongoURL, { useNewUrlParser: true, useFindAndModify: false })
  .then(() => {
    console.log("💻 ==> Database Connected!!");
  })
  .catch(err => {
    console.log(`Error connecting to Mongo: ${err}`);
  });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
