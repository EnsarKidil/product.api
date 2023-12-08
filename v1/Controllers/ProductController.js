//This is the controller class for our Product API
//This class contains the required functions for the CRUD operations

//First of all, call service layer
const productService = require('../../Services/ProductService');
const ProductCreateRequestModel = require('../RequestModels/ProductCreateRequestModel');
const ProductUpdateRequestModel = require('../RequestModels/ProductUpdateRequestModel');

class ProductController{
    //Create is the first function for the POST operation
    //This will take a body from the client, and then add the new product to the database
    //If the process is succesful, it will return 201 and the id of the new product
    async Create(req, res) {
        const requestModel = new ProductCreateRequestModel(req.body);
        const productData = requestModel.toDatabaseModel();
        const response = await productService.Create(productData);
        res.status(201).json(response._id);
    }

    //this is the GetAll method, it gets all the products in the database
    async GetByFilters(req, res){
        const {title, category} = req.query;
        const products = await productService.GetByFilters(title, category);
        res.status(200).json(products);
    }

    //this is Full Body update -put- method. We take Product Update Request Model from the request
    //and find the id with the product, then update the whole product
    async UpdateById(req,res){
        const product = await productService.GetById(req.body.id); //i created GetById method here to ensure single responsibility principle
        const updateRequest = new ProductUpdateRequestModel(req.body);
        const updatedProductData = updateRequest.toDatabaseModel(product);
        const updatedProduct = await productService.UpdateById(updatedProductData);
        res.status(200).json(`Updated the product with id ${updatedProduct._id}`);
    }

    //this is Partial update -patch- method. We take only id of the product and the desired category
    //then partially update the product's category
    async UpdateCategoryById(req, res){
        const productId = req.body.id;
        const category = req.body.category;
        const updatedProduct = await productService.UpdateCategoryById(productId,category);
        res.status(200).json(`Updated the category of the product with id ${updatedProduct._id}`);
    }

    //this is the delete method. We take only id of the product and delete the product from the database
    async DeleteById(req, res){
        const deletedProduct = await productService.DeleteById(req.body.id);
        res.status(200).json(`Deleted the product with id ${deletedProduct._id}`)
    }
}

module.exports = new ProductController();