//This is the repository layer where we will be doing database operations

const ProductModel = require('../Models/ProductModel');

class ProductRepository{
    async Create(productData){
        const product = new ProductModel(productData);
        return await product.save(); //product.save will insert a new object to the database
    }

    async GetAll(){
        const products = await ProductModel.find(); //empty filter means get all of the products
        return products;
    }

    async UpdateById(updatedProductData){
        const updatedProduct = await ProductModel.findByIdAndUpdate(updatedProductData._id,updatedProductData); //finds the product by the id and operate a full body update
        return updatedProduct;
    }

    async UpdateCategoryById(productId, category){
        const updatedProduct = await ProductModel.updateOne( //finds the product with id and updates the category with mongodb's $set operator
            {_id : productId},
            {$set : {category : category} }
        );
        return updatedProduct;
    }

    async DeleteById(id){
        const deletedProduct = await ProductModel.findByIdAndDelete(id); //finds the product with id and deletes
        return deletedProduct;
    }

    async GetById(id){
        const product = await ProductModel.findById(id); //finds the product with id, this is not created directly for a crud operation but to ensure single responsibility
        return product;
    }
}

module.exports = new ProductRepository();