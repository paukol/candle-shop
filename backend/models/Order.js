const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  cart: { type: Array },
  name: { type: String },
  surname: { type: String},
  address: { type: String },
});

module.exports = mongoose.model('Order', orderSchema);