//This is the service layer
//In service layer, we will include our business logics if needed

const productRepository = require('../Repositories/ProductRepository');

class ProductService{
    async Create(productData){
        return await productRepository.Create(productData);
    }

    async GetByFilters(title, category){
        return await productRepository.GetByFilters(title, category);
    }

    async UpdateById(updatedProductData){
        return await productRepository.UpdateById(updatedProductData);
    }

    async UpdateCategoryById(productId, category){
        return await productRepository.UpdateCategoryById(productId, category);
    }

    async DeleteById(id){
        return await productRepository.DeleteById(id);
    }

    async GetById(id){
        return await productRepository.GetById(id);
    }
}

module.exports = new ProductService();