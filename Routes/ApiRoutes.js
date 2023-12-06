//This is the route layer
//Routes layer includes the routes of our crud operations

const express = require('express');
const router = express.Router();
//First of all, call the controller layer which is the next layer
const productController = require('../Controllers/ProductController');

router.post('/create',productController.Create);
router.get('/:id',productController.GetAll);
router.put('/:id', productController.UpdateById);
router.patch('/update-category/:_id', productController.UpdateCategoryById);
router.delete('/:id', productController.DeleteById);
module.exports = router;