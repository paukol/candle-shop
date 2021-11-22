
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  cart: { type: Array, required: true },
  totalPrice: {type: Number, required: true},
  name: { type: String, required: true },
  surname: { type: String, required: true},
  address: { type: String, required: true },
  email: {type: String, required: true},
});

module.exports = mongoose.model('Order', orderSchema);