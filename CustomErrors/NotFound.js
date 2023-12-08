//This is the Not Found error
//I used this if a product with searched id is not found on the database
//Or GetAll method could not get any products

const CustomError = require('./CustomError');

class NotFound extends CustomError { //Inherits from my CustomError class
    constructor(message) {
        super(404, message);
    }
}

class ProductsNotFound extends NotFound{ //If any product was not found with GetAll method
    constructor(message) {
        super(message);
    }
}

class ProductNotFound extends NotFound{ //If the product with searched id was not found
    constructor(message) {
        super(message);
    }
}

module.exports = {
    NotFound,
    ProductsNotFound,
    ProductNotFound
}