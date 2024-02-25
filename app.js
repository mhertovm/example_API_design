const express = require('express');
const app = express()
const productRouts = require('./api/routes/product')
const cors = require('cors')

app.use(cors());
app.use('/products', productRouts);

module.exports = app;