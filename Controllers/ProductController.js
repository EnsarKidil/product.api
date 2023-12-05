//This is the controller class for our Product API
//This class contains the required functions for the CRUD operations

//First of all, call service layer
const productService = require('../Services/ProductService');
const ProductCreateRequestModel = require('../RequestModels/ProductCreateRequestModel');

class ProductController{
    //Create is the first function for the POST operation
    //This will take a body from the client, and then add the new product to the database
    //If the process is succesful, it will return 201 and the id of the new product
    async Create(req, res) {

        try {
            const requestModel = new ProductCreateRequestModel(req.body);
            const productData = requestModel.toDatabaseModel();
            const response = await productService.Create(productData);
            res.status(201).json(response._id);
        }

        catch (err){
            res.status(500).json(err);
        }
    }
}

module.exports = new ProductController();