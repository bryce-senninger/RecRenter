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

const ski = new Subcategory({ name: "Skiing" });
ski.save();
aCategory.subcategories.push(ski);
const snowboard = new Subcategory({ name: "Snowboarding" });
snowboard.save();
aCategory.subcategories.push(snowboard);
const backcountry = new Subcategory({ name: "Backcountry" });
backcountry.save();
aCategory.subcategories.push(backcountry);
const clothing = new Subcategory({ name: "Clothing" });
clothing.save();
aCategory.subcategories.push(clothing);
const waterMisc = new Subcategory({ name: "Misc" });
waterMisc.save();
aCategory.subcategories.push(waterMisc);

aCategory.save((err, data) => {});

//================WATER-SPORTS=============================

const bCategory = new Category({
  name: "Water Sports",
  image: "../../../assets/drop.png"
});

const wake = new Subcategory({ name: "Wake Sports" });
wake.save();
bCategory.subcategories.push(wake);
const fishing = new Subcategory({ name: "Fishing" });
fishing.save();
bCategory.subcategories.push(fishing);
const rafting = new Subcategory({ name: "Rafting" });
rafting.save();
bCategory.subcategories.push(rafting);
const waterAcc = new Subcategory({ name: "Accessories" });
waterAcc.save();
bCategory.subcategories.push(waterAcc);
const wakeMisc = new Subcategory({ name: "Misc" });
wakeMisc.save();
bCategory.subcategories.push(wakeMisc);

bCategory.save((err, data) => {});

//=================VERTICAL============================

const cCategory = new Category({
  name: "Vertical",
  image: "../../../assets/climbing.png"
});

const climb = new Subcategory({ name: "Climbing" });
climb.save();
cCategory.subcategories.push(climb);
const hike = new Subcategory({ name: "Hiking" });
hike.save();
cCategory.subcategories.push(hike);
const mountaineering = new Subcategory({ name: "Mountaineering" });
mountaineering.save();
cCategory.subcategories.push(mountaineering);
const verticalAcc = new Subcategory({ name: "Accessories" });
verticalAcc.save();
cCategory.subcategories.push(verticalAcc);
const verticalMisc = new Subcategory({ name: "Misc" });
verticalMisc.save();
cCategory.subcategories.push(verticalMisc);

cCategory.save((err, data) => {});
//===============CAMPING DOCUMENT==============================

const dCategory = new Category({
  name: "Camping",
  image: "../../../assets/tent.png"
});

const tent = new Subcategory({ name: "Tents" });
tent.save();
dCategory.subcategories.push(tent);
const sleep = new Subcategory({ name: "Sleep" });
sleep.save();
dCategory.subcategories.push(sleep);
const kitchen = new Subcategory({ name: "Kitchen" });
kitchen.save();
dCategory.subcategories.push(kitchen);
const campAcc = new Subcategory({ name: "Accessories" });
campAcc.save();
dCategory.subcategories.push(campAcc);
const campMisc = new Subcategory({ name: "Misc" });
campMisc.save();
dCategory.subcategories.push(campMisc);

dCategory.save((err, data) => {});

//===============BIKES DOCUMENT=============================

const eCategory = new Category({
  name: "Bikes",
  image: "../../../assets/bicycle.png"
});

const mountain = new Subcategory({ name: "Mountain" });
mountain.save();
eCategory.subcategories.push(mountain);
const fatTire = new Subcategory({ name: "Fat-Tire" });
fatTire.save();
eCategory.subcategories.push(fatTire);
const Electric = new Subcategory({ name: "Electric" });
Electric.save();
eCategory.subcategories.push(Electric);
const bikesAcc = new Subcategory({ name: "Accessories" });
bikesAcc.save();
eCategory.subcategories.push(bikesAcc);
const bikesMisc = new Subcategory({ name: "Misc" });
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
