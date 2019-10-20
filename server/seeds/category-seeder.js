const mongoose = require("mongoose");
const { Category, Subcategory } = require("../models/category");
// const Subcategory = require("../models/category");

const mongoURL = process.env.MONGODB_URI || "mongodb://localhost/RecRenter";

mongoose.connect(mongoURL, { useNewUrlParser: true, useFindAndModify: false });

//================SNOW-SPORTS=============================

const aCategory = new Category({ title: "Snow Sports" });

const ski = new Subcategory({ title: "Skiing" });
ski.save();
aCategory.subcategoryId.push(ski);
const snowboard = new Subcategory({ title: "Snowboarding" });
snowboard.save();
aCategory.subcategoryId.push(snowboard);
const backcountry = new Subcategory({ title: "Backcountry" });
backcountry.save();
aCategory.subcategoryId.push(backcountry);
const clothing = new Subcategory({ title: "Clothing" });
clothing.save();
aCategory.subcategoryId.push(clothing);
const waterMisc = new Subcategory({ title: "Misc" });
waterMisc.save();
aCategory.subcategoryId.push(waterMisc);

aCategory.save((err, data) => {});

//================WATER-SPORTS=============================

const bCategory = new Category({ title: "Water Sports" });

const wake = new Subcategory({ title: "Wake Sports" });
wake.save();
bCategory.subcategoryId.push(wake);
const fishing = new Subcategory({ title: "Fishing" });
fishing.save();
bCategory.subcategoryId.push(fishing);
const rafting = new Subcategory({ title: "Rafting" });
rafting.save();
bCategory.subcategoryId.push(rafting);
const waterAcc = new Subcategory({ title: "Accessories" });
waterAcc.save();
bCategory.subcategoryId.push(waterAcc);
const wakeMisc = new Subcategory({ title: "Misc" });
wakeMisc.save();
bCategory.subcategoryId.push(wakeMisc);

bCategory.save((err, data) => {});

//=================VERTICAL============================

const cCategory = new Category({ title: "Vertical" });

const climb = new Subcategory({ title: "Climbing" });
climb.save();
cCategory.subcategoryId.push(climb);
const hike = new Subcategory({ title: "Hiking" });
hike.save();
cCategory.subcategoryId.push(hike);
const mountaineering = new Subcategory({ title: "Mountaineering" });
mountaineering.save();
cCategory.subcategoryId.push(mountaineering);
const verticalAcc = new Subcategory({ title: "Accessories" });
verticalAcc.save();
cCategory.subcategoryId.push(verticalAcc);
const verticalMisc = new Subcategory({ title: "Misc" });
verticalMisc.save();
cCategory.subcategoryId.push(verticalMisc);

cCategory.save((err, data) => {});
//===============CAMPING DOCUMENT==============================

const dCategory = new Category({ title: "Camping" });

const tent = new Subcategory({ title: "Tents" });
tent.save();
dCategory.subcategoryId.push(tent);
const sleep = new Subcategory({ title: "Sleep" });
sleep.save();
dCategory.subcategoryId.push(sleep);
const kitchen = new Subcategory({ title: "Kitchen" });
kitchen.save();
dCategory.subcategoryId.push(kitchen);
const campAcc = new Subcategory({ title: "Accessories" });
campAcc.save();
dCategory.subcategoryId.push(campAcc);
const campMisc = new Subcategory({ title: "Misc" });
campMisc.save();
dCategory.subcategoryId.push(campMisc);

dCategory.save((err, data) => {});

//===============BIKES DOCUMENT=============================

const eCategory = new Category({ title: "Bikes" });

const mountain = new Subcategory({ title: "Mountain" });
mountain.save();
eCategory.subcategoryId.push(mountain);
const fatTire = new Subcategory({ title: "Fat-Tire" });
fatTire.save();
eCategory.subcategoryId.push(fatTire);
const Electric = new Subcategory({ title: "Electric" });
Electric.save();
eCategory.subcategoryId.push(Electric);
const bikesAcc = new Subcategory({ title: "Accessories" });
bikesAcc.save();
eCategory.subcategoryId.push(bikesAcc);
const bikesMisc = new Subcategory({ title: "Misc" });
bikesMisc.save();
eCategory.subcategoryId.push(bikesMisc);

eCategory.save((err, data) => {
  mongoose.disconnect();
});
