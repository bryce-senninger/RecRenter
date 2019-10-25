const mongoose = require("mongoose");
const { Category, Subcategory } = require("../models/category");
// const Subcategory = require("../models/category");

const mongoURL = process.env.MONGODB_URI || "mongodb://localhost/RecRenter";

mongoose.connect(mongoURL, { useNewUrlParser: true, useFindAndModify: false });

//================SNOW-SPORTS=============================

const aCategory = new Category({
  name: "Snow Sports",
  image: "../../../assets/snowflake.png"
});

const ski = new Subcategory({
  name: "Skiing",
  image: "../../../assets/subImages/snow/ski.png"
});
ski.save();
aCategory.subcategories.push(ski);
const snowboard = new Subcategory({
  name: "Snowboarding",
  image: "../../../assets/subImages/snow/extreme-snowboard-silhouette.png"
});
snowboard.save();
aCategory.subcategories.push(snowboard);
const backcountry = new Subcategory({
  name: "Backcountry",
  image: "../../../assets/subImages/snow/top.png"
});
backcountry.save();
aCategory.subcategories.push(backcountry);
const clothing = new Subcategory({
  name: "Clothing",
  image: "../../../assets/subImages/snow/coat.png"
});
clothing.save();
aCategory.subcategories.push(clothing);
const waterMisc = new Subcategory({
  name: "Misc",
  image: "../../../assets/subImages/snow/help.png"
});
waterMisc.save();
aCategory.subcategories.push(waterMisc);

aCategory.save((err, data) => {});

//================WATER-SPORTS=============================

const bCategory = new Category({
  name: "Water Sports",
  image: "../../../assets/drop.png"
});

const wake = new Subcategory({
  name: "Wake Sports",
  image: "../../../assets/subImages/water/wave.png"
});
wake.save();
bCategory.subcategories.push(wake);
const fishing = new Subcategory({
  name: "Fishing",
  image: "../../../assets/subImages/water/fishing.png"
});
fishing.save();
bCategory.subcategories.push(fishing);
const rafting = new Subcategory({
  name: "Rafting",
  image: "../../../assets/subImages/water/kayak.png"
});
rafting.save();
bCategory.subcategories.push(rafting);
const waterAcc = new Subcategory({
  name: "Accessories",
  image: "../../../assets/subImages/water/life-jacket.png"
});
waterAcc.save();
bCategory.subcategories.push(waterAcc);
const wakeMisc = new Subcategory({
  name: "Misc",
  image: "../../../assets/subImages/water/help.png"
});
wakeMisc.save();
bCategory.subcategories.push(wakeMisc);

bCategory.save((err, data) => {});

//=================VERTICAL============================

const cCategory = new Category({
  name: "Vertical",
  image: "../../../assets/climbing.png"
});

const climb = new Subcategory({
  name: "Climbing",
  image: "../../../assets/subImages/vertical/climbing-silhouette.png"
});
climb.save();
cCategory.subcategories.push(climb);
const hike = new Subcategory({
  name: "Hiking",
  image: "../../../assets/subImages/vertical/climbing.png"
});
hike.save();
cCategory.subcategories.push(hike);
const mountaineering = new Subcategory({
  name: "Mountaineering",
  image: "../../../assets/subImages/vertical/climb.png"
});
mountaineering.save();
cCategory.subcategories.push(mountaineering);
const verticalAcc = new Subcategory({
  name: "Accessories",
  image: "../../../assets/subImages/vertical/boots.png"
});
verticalAcc.save();
cCategory.subcategories.push(verticalAcc);
const verticalMisc = new Subcategory({
  name: "Misc",
  image: "../../../assets/subImages/vertical/help.png"
});
verticalMisc.save();
cCategory.subcategories.push(verticalMisc);

cCategory.save((err, data) => {});
//===============CAMPING DOCUMENT==============================

const dCategory = new Category({
  name: "Camping",
  image: "../../../assets/tent.png"
});

const tent = new Subcategory({
  name: "Tents",
  image: "../../../assets/subImages/camp/camp.png"
});
tent.save();
dCategory.subcategories.push(tent);
const sleep = new Subcategory({
  name: "Sleep",
  image: "../../../assets/subImages/camp/moon.png"
});
sleep.save();
dCategory.subcategories.push(sleep);
const kitchen = new Subcategory({
  name: "Kitchen",
  image: "../../../assets/subImages/camp/frying-pan.png"
});
kitchen.save();
dCategory.subcategories.push(kitchen);
const campAcc = new Subcategory({
  name: "Accessories",
  image: "../../../assets/subImages/camp/backpack.png"
});
campAcc.save();
dCategory.subcategories.push(campAcc);
const campMisc = new Subcategory({
  name: "Misc",
  image: "../../../assets/subImages/camp/help.png"
});
campMisc.save();
dCategory.subcategories.push(campMisc);

dCategory.save((err, data) => {});

//===============BIKES DOCUMENT=============================

const eCategory = new Category({
  name: "Bikes",
  image: "../../../assets/bicycle.png"
});

const mountain = new Subcategory({
  name: "Mountain",
  image: "../../../assets/subImages/bike/mountain-bike.png"
});
mountain.save();
eCategory.subcategories.push(mountain);
const fatTire = new Subcategory({
  name: "Fat-Tire",
  image: "../../../assets/subImages/bike/tire.png"
});
fatTire.save();
eCategory.subcategories.push(fatTire);
const Electric = new Subcategory({
  name: "Electric",
  image: "../../../assets/subImages/bike/flash.png"
});
Electric.save();
eCategory.subcategories.push(Electric);
const bikesAcc = new Subcategory({
  name: "Accessories",
  image: "../../../assets/subImages/bike/helmet.png"
});
bikesAcc.save();
eCategory.subcategories.push(bikesAcc);
const bikesMisc = new Subcategory({
  name: "Misc",
  image: "../../../assets/subImages/bike/help.png"
});
bikesMisc.save();
eCategory.subcategories.push(bikesMisc);

eCategory.save((err, data) => {});

const fCategory = new Category({
  name: "Misc",
  image: "../../../assets/help.png"
});

const Miscmisc = new Subcategory({ name: "Misc" });
Miscmisc.save();
fCategory.subcategories.push(Miscmisc);

fCategory.save((err, data) => {
  mongoose.disconnect();
});
