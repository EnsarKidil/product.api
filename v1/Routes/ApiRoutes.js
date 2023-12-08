//This is the route layer
//Routes layer includes the routes of our crud operations

const express = require('express');
const router = express.Router();
//First of all, call the controller layer which is the next layer
const productController = require('../Controllers/ProductController');

//our api is a product api, this is why our initial ep is /Product
//since we have only a post and only a get method, they are only: get /Product, post /Product
//we have a put method which is: put /Product/{id}
//we have a patch method that only updates the category of the product.
//this is why we need to specify that method changes category
//so, it is patch Product/update-category/{id}
//finally, delete /Product/{id}

router.post('/', async (req, res, next) => {
    try{
        await productController.Create(req, res);
    }
    catch (err){
        next(err);
    }
});

router.get('/', async (req, res, next) => {
    try {
        await productController.GetAll(req, res);
    } catch (err) {
        next(err);
    }
});

router.put('/:id', async (req, res, next) => {
    try{
        await productController.UpdateById(req, res);
    }
    catch (err){
        next(err);
    }
});

router.patch('/update-category/:_id', async (req, res, next) => {
    try {
        await productController.UpdateCategoryById(req, res);
    }
    catch(err){
        next(err);
    }
});

router.delete('/:id', async (req, res, next) => {
    try{
        await productController.DeleteById(req, res);
    }
    catch(err){
        next(err);
    }
});

module.exports = router;