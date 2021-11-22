const mongoose = require('mongoose');

const cartsSchema = new mongoose.Schema({
  title: { type: String},
  photo: { type: String },
  price: { type: String },
  description: { type: String },
  shortDesc: { type: String },
  addPhoto1: { type: String},
  addPhoto2: { type: String },
  addPhoto3: { type: String },
  qty: {type: Number},
  request: {type: String},
});

module.exports = mongoose.model('Cart', cartsSchema);