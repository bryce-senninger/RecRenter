const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//define API routes here

const mongoose = require("mongoose");
const mongoURL = process.env.MONGODB_URI || "mongodb://localhost/RecRenter";
mongoose
  .connect(mongoURL, { useNewUrlParser: true })
  .then(() => {
    console.log("💻 ==> Connetected!!");
  })
  .catch(err => {
    console.log(`Error connecting to Mongo: ${err}`);
  });

require("./routes/apiRoutes")(app);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
