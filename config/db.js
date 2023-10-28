const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.MONGO_URI)
  } catch(err) {
    process.exit()
  }
};

module.exports = connectDB
