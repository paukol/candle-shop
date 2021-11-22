const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

/* ROUTES */
const productsRoutes = require('./routes/productsRoutes');
const orderRoutes = require('./routes/orderRoutes');

const app = express();

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* SERVE STATIC FILES */
app.use(express.static(path.join(__dirname + '/public')));

/* API ENDPOINTS */
app.use('/api', productsRoutes);
app.use('/api', orderRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.use((req, res) => {
  res.status(404).json({ message: 'Not found ' });
});

/* MONGOOSE */
mongoose.connect(`mongodb+srv://paukol:1234567890@cluster0.73vtl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, { useNewUrlParser: true, dbName: "CandleStore" });
const db = mongoose.connection;

db.once('open', () => {
  console.log('Conntected to the database');
});

db.on('error', err => console.log('Error ' + err));

/* START SERVER */
const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
  console.log('Server is running on port: ' + port);
});

module.exports = server;
