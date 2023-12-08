//This is the repository layer where we will be doing database operations

const ProductModel = require('../Models/ProductModel');
const {ProductsNotFound} = require("../CustomErrors/NotFound");
const {ProductNotFound} = require("../CustomErrors/NotFound");

class ProductRepository{
    async Create(productData){
        const product = new ProductModel(productData);
        return await product.save(); //product.save will insert a new object to the database
    }

    async GetByFilters(title, category){
        const filters = {} //contains the filters
        if(title){
            filters.title = {$regex: title, $options: 'i'};
        }
        if(category){
            filters.category = {$regex: category, $options: 'i'};
        }

        const products = await ProductModel.find(filters); //gets the products that matches the filters
        if(!products){
            throw new ProductsNotFound("Products Not Found!")
        }
        return products;
    }

    async UpdateById(updatedProductData){
        const updatedProduct = await ProductModel.findByIdAndUpdate(updatedProductData._id,updatedProductData); //finds the product by the id and operate a full body update

        if(!updatedProduct){
            throw new ProductNotFound("Product Not Found");
        }

        return updatedProduct;
    }

    async UpdateCategoryById(productId, category){
        await ProductModel.updateOne( //finds the product with id and updates the category with mongodb's $set operator
            {_id : productId},
            {$set : {category : category} }
        );

        const updatedProduct = await this.GetById(productId);
        if(!updatedProduct){
            throw new ProductNotFound("Product Not Found");
        }

        return updatedProduct;
    }

    async DeleteById(id){
        const deletedProduct = await ProductModel.findByIdAndDelete(id); //finds the product with id and deletes
        if(!deletedProduct){
            throw new ProductNotFound("Product Not Found");
        }
        return deletedProduct;
    }

    async GetById(id){
        const product = await ProductModel.findById(id); //finds the product with id, this is not created directly for a crud operation but to ensure single responsibility
        if(!product){
            throw new ProductNotFound("Product Not Found");
        }
        return product;
    }
}

module.exports = new ProductRepository();