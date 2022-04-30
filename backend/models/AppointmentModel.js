const mongoose = require("mongoose");

const appointmentModel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  schedule: {
    type: String,
    required: true,
  },
  problem: {
    type: String,
    required: true,
  },
  appointmentTime:{
    type: Date
  },
  status: {
    // pending, approved, completed
    type: String
  },
  link: {
    // pending, approved, completed
    type: String
  }
});
module.exports = mongoose.model("appointment", appointmentModel);
