//This is the service layer
//In service layer, we will include our business logics if needed

const productRepository = require('../Repositories/ProductRepository');

class ProductService{
    async Create(productData){
        return await productRepository.Create(productData);
    }
}

module.exports = new ProductService();