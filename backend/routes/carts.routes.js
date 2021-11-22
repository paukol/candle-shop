const express = require('express');
const router = express.Router();

const Cart = require('../models/Cart');

router.get('/carts', async (req, res) => {
  try {
    const result = await Cart.find();
    if(!result) res.status(404).json({ post: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

/*
router.get('/cart/:id', async (req, res) => {
  try {
    const result = await Cart
      .findById(req.params.id);
    if(!result) res.status(404).json({ post: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
});
*/

module.exports = router;