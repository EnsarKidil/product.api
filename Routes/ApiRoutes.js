//This is the route layer
//Routes layer includes the routes of our crud operations

const express = require('express');
const router = express.Router();
//First of all, call the controller layer which is the next layer
const productController = require('../Controllers/ProductController');

router.post('/create',productController.Create);

module.exports = router;