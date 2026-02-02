const mongoose = require("mongoose");

const connectDB = async (URL) => {
  await mongoose.connect(URL);
  console.log("DB Connected");
};

module.exports = connectDB;
