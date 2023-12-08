//This is my custom error class. It inherits from Error class and it is used to create custom errors.
//You can see the implementation on NotFound.js file

const Logger = require('../LoggingHandlers/LoggingHandler'); //My logger class

class CustomError extends Error { //Inherits from Error class
    constructor(statusCode, message) { //Takes statusCode and message as Error parameters
        super(message); //This is the error message
        this.statusCode = statusCode;
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
        Logger.error(this.message);
    }
}

module.exports = CustomError;