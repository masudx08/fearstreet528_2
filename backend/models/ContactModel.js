const mongoose = require("mongoose");

const contactScehma = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("contact", contactScehma);
