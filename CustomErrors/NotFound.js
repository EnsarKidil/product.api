const CustomError = require('./CustomError');

class NotFound extends CustomError {
    constructor(message) {
        super(404, message);
    }
}

class ProductsNotFound extends NotFound{
    constructor(message) {
        super(message);
    }
}

class ProductNotFound extends NotFound{
    constructor(message) {
        super(message);
    }
}

module.exports = {
    NotFound,
    ProductsNotFound,
    ProductNotFound
}