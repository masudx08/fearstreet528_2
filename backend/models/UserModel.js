const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  authProvider: String,
  uid: String,
  role: String
});
module.exports = mongoose.model("user", userModel);
