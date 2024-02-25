const express = require('express');
const router = express.Router();
const productCantrolers = require('../controlers/product')

router.get('/', productCantrolers.login)

module.exports = router