const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const PORT = process.env.PORT || 3001;

const app = express();
const routes = require("./routes");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// SET STORAGE
var storage = multer.memoryStorage();

var upload = multer({
  storage: storage,
  onFileUploadStart: function(file) {
    console.log(file.originalname + " is starting ...");
  }
}).single("img");
//define API routes here

const mongoose = require("mongoose");
const mongoURL = process.env.MONGODB_URI || "mongodb://localhost/RecRenter";
mongoose
  .connect(mongoURL, { useNewUrlParser: true, useFindAndModify: false })
  .then(() => {
    console.log("💻 ==> Connetected!!");
  })
  .catch(err => {
    console.log(`Error connecting to Mongo: ${err}`);
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

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
