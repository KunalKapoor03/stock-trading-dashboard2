const mongoose = require("mongoose");
const HoldingsSchema = require("../Schemas/HoldingsSchema");

const HoldingsModel = mongoose.model("Holding", HoldingsSchema);

module.exports = HoldingsModel;
