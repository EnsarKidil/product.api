//This is the repository layer where we will be doing database operations

const ProductModel = require('../Models/ProductModel');

class ProductRepository{
    async Create(productData){
        const product = new ProductModel(productData);
        return await product.save(); //product.save will insert a new object to the database
    }

    async GetAll(){
        const products = await ProductModel.find();
        return products;
    }

    async UpdateById(updatedProductData){
        const updatedProduct = await ProductModel.findByIdAndUpdate(updatedProductData._id,updatedProductData);
        return updatedProduct;
    }

    async GetById(id){
        const product = await ProductModel.findById(id);
        if(product == null){
            throw new Error('Product with id ${id} not found');
        }

        return product;
    }
}

module.exports = new ProductRepository();