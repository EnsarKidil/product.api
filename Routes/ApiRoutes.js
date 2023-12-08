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

/**
 * @swagger
 * /Product:
 *   post:
 *     description: Creates a new product
 *     requestBody:
 *       description: Product information
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: string
 *               category:
 *                 type: string
 *     responses:
 *       201:
 *         description: Created
 *       500:
 *         description: Internal Server Error
 */
router.post('/', async (req, res, next) => {
    try{
        await productController.Create(req, res);
    }
    catch (err){
        next(err);
    }
});

/**
 * @swagger
 * /Product:
 *   get:
 *     description: Returns all products
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal Server Error
 */
router.get('/', async (req, res, next) => {
    try {
        await productController.GetAll(req, res);
    } catch (err) {
        next(err);
    }
});
/**
 * @swagger
 * /Product/{id}:
 *   put:
 *     description: Operates a full body update by product id
 *     requestBody:
 *       description: Product information
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: string
 *               category:
 *                 type: string
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal Server Error
 */
router.put('/:id', async (req, res, next) => {
    try{
        await productController.UpdateById(req, res);
    }
    catch (err){
        next(err);
    }
});

/**
 * @swagger
 * /Product/category-update/{id}:
 *   patch:
 *     description: Updates only the category of the product by id
 *     requestBody:
 *       description: Category information
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               category:
 *                 type: string
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal Server Error
 */
router.patch('/update-category/:_id', async (req, res, next) => {
    try {
        await productController.UpdateCategoryById(req, res);
    }
    catch(err){
        next(err);
    }
});

/**
 * @swagger
 * /Product/{id}:
 *   delete:
 *     description: Deletes the product by id
 *     requestBody:
 *       description: Category information
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal Server Error
 */
router.delete('/:id', async (req, res, next) => {
    try{
        await productController.DeleteById(req, res);
    }
    catch(err){
        next(err);
    }
});

module.exports = router;