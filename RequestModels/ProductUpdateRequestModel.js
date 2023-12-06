//This is the request model for full body update
//This class includes a helper method that returns the database model for the product



class ProductUpdateRequestModel {
    constructor({ id, title, description, price, category }) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.category = category;
    }

    toDatabaseModel(product){
        return {
            _id : this.id,
            title : this.title,
            description : this.description,
            price : this.price,
            category : this.category,
            createdAt : product.createdAt,
            updatedAt : Date.now()
        };
    }

}

module.exports = ProductUpdateRequestModel;