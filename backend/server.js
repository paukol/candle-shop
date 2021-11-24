require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const productsRoutes = require('./routes/productsRoutes');
const ordersRoutes = require('./routes/orderRoutes');
const connectDB = require('./db');
const app = express();

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* API ENDPOINTS */
app.use('/api', productsRoutes);
app.use('/api', ordersRoutes);

/* API ERROR PAGES */
app.use('/api', (req, res) => {
  res.status(404).send({ product: 'Not found...' });
});

app.use(express.static(path.join(__dirname, '../build')));
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

/* MONGOOSE */
connectDB();

/* START SERVER */
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log('Server is running on port: '+ port);
});
