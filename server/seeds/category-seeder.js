const mongoose = require("mongoose");
const { Category, Subcategory } = require("../models/category");
// const Subcategory = require("../models/category");

const mongoURL = process.env.MONGODB_URI || "mongodb://localhost/RecRenter";

mongoose.connect(mongoURL, { useNewUrlParser: true, useFindAndModify: false });

//================SNOW-SPORTS=============================

const aCategory = new Category({
  title: "Snow Sports",
  image: "../../../assets/1.png"
});

const ski = new Subcategory({ title: "Skiing" });
ski.save();
aCategory.subcategories.push(ski);
const snowboard = new Subcategory({ title: "Snowboarding" });
snowboard.save();
aCategory.subcategories.push(snowboard);
const backcountry = new Subcategory({ title: "Backcountry" });
backcountry.save();
aCategory.subcategories.push(backcountry);
const clothing = new Subcategory({ title: "Clothing" });
clothing.save();
aCategory.subcategories.push(clothing);
const waterMisc = new Subcategory({ title: "Misc" });
waterMisc.save();
aCategory.subcategories.push(waterMisc);

aCategory.save((err, data) => {});

//================WATER-SPORTS=============================

const bCategory = new Category({
  title: "Water Sports",
  image: "../../../assets/2.png"
});

const wake = new Subcategory({ title: "Wake Sports" });
wake.save();
bCategory.subcategories.push(wake);
const fishing = new Subcategory({ title: "Fishing" });
fishing.save();
bCategory.subcategories.push(fishing);
const rafting = new Subcategory({ title: "Rafting" });
rafting.save();
bCategory.subcategories.push(rafting);
const waterAcc = new Subcategory({ title: "Accessories" });
waterAcc.save();
bCategory.subcategories.push(waterAcc);
const wakeMisc = new Subcategory({ title: "Misc" });
wakeMisc.save();
bCategory.subcategories.push(wakeMisc);

bCategory.save((err, data) => {});

//=================VERTICAL============================

const cCategory = new Category({
  title: "Vertical",
  image: "../../../assets/3.png"
});

const climb = new Subcategory({ title: "Climbing" });
climb.save();
cCategory.subcategories.push(climb);
const hike = new Subcategory({ title: "Hiking" });
hike.save();
cCategory.subcategories.push(hike);
const mountaineering = new Subcategory({ title: "Mountaineering" });
mountaineering.save();
cCategory.subcategories.push(mountaineering);
const verticalAcc = new Subcategory({ title: "Accessories" });
verticalAcc.save();
cCategory.subcategories.push(verticalAcc);
const verticalMisc = new Subcategory({ title: "Misc" });
verticalMisc.save();
cCategory.subcategories.push(verticalMisc);

cCategory.save((err, data) => {});
//===============CAMPING DOCUMENT==============================

const dCategory = new Category({
  title: "Camping",
  image: "../../../assets/4.png"
});

const tent = new Subcategory({ title: "Tents" });
tent.save();
dCategory.subcategories.push(tent);
const sleep = new Subcategory({ title: "Sleep" });
sleep.save();
dCategory.subcategories.push(sleep);
const kitchen = new Subcategory({ title: "Kitchen" });
kitchen.save();
dCategory.subcategories.push(kitchen);
const campAcc = new Subcategory({ title: "Accessories" });
campAcc.save();
dCategory.subcategories.push(campAcc);
const campMisc = new Subcategory({ title: "Misc" });
campMisc.save();
dCategory.subcategories.push(campMisc);

dCategory.save((err, data) => {});

//===============BIKES DOCUMENT=============================

const eCategory = new Category({
  title: "Bikes",
  image: "../../../assets/5.png"
});

const mountain = new Subcategory({ title: "Mountain" });
mountain.save();
eCategory.subcategories.push(mountain);
const fatTire = new Subcategory({ title: "Fat-Tire" });
fatTire.save();
eCategory.subcategories.push(fatTire);
const Electric = new Subcategory({ title: "Electric" });
Electric.save();
eCategory.subcategories.push(Electric);
const bikesAcc = new Subcategory({ title: "Accessories" });
bikesAcc.save();
eCategory.subcategories.push(bikesAcc);
const bikesMisc = new Subcategory({ title: "Misc" });
bikesMisc.save();
eCategory.subcategories.push(bikesMisc);

eCategory.save((err, data) => {
  mongoose.disconnect();
});
