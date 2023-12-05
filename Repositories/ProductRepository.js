//This is the repository layer where we will be doing database operations

const ProductModel = require('../Models/ProductModel');

class ProductRepository{
    async Create(productData){
        const product = new ProductModel(productData);
        return await product.save(); //product.save will insert a new object to the database
    }
}

module.exports = new ProductRepository();