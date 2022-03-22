const mongoose = require("mongoose");
const config = require("../config/index");

const connectDB = (url = config.dbUrl, opts = {}) => {
  return mongoose.connect(url, { ...opts, useNewUrlParser: true });
};

module.exports = connectDB;
