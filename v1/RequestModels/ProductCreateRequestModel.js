//This is the request model for creating a new product
//This class includes a helper method that returns the database model for the product

uuid = require('uuid');

class ProductCreateRequestModel {
    constructor({ title, description, price, category }) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.category = category;
    }

    toDatabaseModel(){
        return {
            _id : uuid.v4().toString(),
            title : this.title,
            description : this.description,
            price : this.price,
            category : this.category,
            createdAt : Date.now().toString(),
            updatedAt : Date.now().toString()
        };
    }

}

module.exports = ProductCreateRequestModel;