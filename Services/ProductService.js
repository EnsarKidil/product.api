//This is the service layer
//In service layer, we will include our business logics if needed

const productRepository = require('../Repositories/ProductRepository');

class ProductService{
    async Create(productData){
        return await productRepository.Create(productData);
    }

    async GetAll(){
        return await productRepository.GetAll();
    }

    async UpdateById(updatedProductData){
        return await productRepository.UpdateById(updatedProductData);
    }

    async GetById(id){
        return await productRepository.GetById(id);
    }
}

module.exports = new ProductService();