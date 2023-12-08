// errorMiddleware.js

function errorHandler(err, req, res, next) {
    res.status(err.statusCode).json(err.message);
}

module.exports = { errorHandler };
