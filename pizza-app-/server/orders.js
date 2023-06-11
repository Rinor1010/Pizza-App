const mongoose = require("mongoose");

const Orders = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  cart: {
    type: [],
    required: true,
  },
  done: {
    type: Boolean,
  },
  time: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("orders", Orders);
