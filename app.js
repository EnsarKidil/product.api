//This is the app file
//App file is the place that our API will run
require('dotenv').config();

const swaggerUi = require('swagger-ui-express');
const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./v1/Routes/ApiRoutes');
const { errorHandler } = require('./CustomMiddlewares/ErrorHandlingMiddleware');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./v1/swagger/swagger.yml');
const app = express();
const port = process.env.PORT
console.log(port);
const mongoURI = process.env.MONGODB_URI;
console.log(mongoURI);

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json());
app.use('/Product/v1', productRoutes);
app.use(errorHandler);

mongoose.connect(mongoURI) //MongoDB connection
    .then(() => {console.log("Connection Successful!")}) //If successful
    .catch(err => console.log(err)); //If there is an error

app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
});
