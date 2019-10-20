const mongoose = require("mongoose");
const Category = require("../models/category");
const Subcategory = require("../models/category");

const mongoURL = process.env.MONGODB_URI || "mongodb://localhost/RecRenter";

mongoose.connect(mongoURL, { useNewUrlParser: true, useFindAndModify: false });

// const snow = new Category({ title: "Snow" });

let sub = new Category({
  title: "Snow",
  subcategories: {
    title: "snow",
    title: "water"
  }
  // {
  //   title: "Skiing"
  // },
  // {
  //   title: "Snowboarding"
  // },
  // {
  //   title: "Backcountry"
  // },
  // {
  //   title: "Clothing"
  // },
  // {
  //   title: "Misc"
  // }
});

sub.save();

// snow.subcategories.push(sub);

// snow.save();
