const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Product API',
            version: '1.0.0',
            description: 'API for managing Product Calls',
        },
    },
    apis: ['./Routes/*.js'],
};

const specs = swaggerJsdoc(options);

module.exports = specs;
