//This is the error handling middleware
//If there is an error in the application, this middleware will take responsibility to give the response

function errorHandler(err, req, res, next) { //next is a method where we send the http informations to next layer
    res.status(err.statusCode).json(err.message);
}

module.exports = { errorHandler };
