const Logger = require('../LoggingHandlers/LoggingHandler');

class CustomError extends Error {
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
        Logger.error(this.message)
    }
}

module.exports = CustomError;