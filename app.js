//This is the app file
//App file is the place that our API will run

require('dotenv').config(); //requires the dotenv library to call our environment variables in .env file
const swaggerUi = require('swagger-ui-express'); //swagger library for express framework
const express = require('express'); //express framework
const mongoose = require('mongoose'); //mongodb library mongoose
const productRoutes = require('./v1/Routes/ApiRoutes'); //our API Routes
const { errorHandler } = require('./CustomMiddlewares/ErrorHandlingMiddleware'); //ErrorHandlingMiddleware
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./v1/swagger/swagger.yml'); //swagger documentation's location

const app = express();
const port = process.env.PORT
const mongoURI = process.env.MONGODB_URI;

//Middlewares
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json());
app.use('/Product/v1', productRoutes);
app.use(errorHandler);

mongoose.connect(mongoURI) //MongoDB connection
    .then(() => {console.log("Connection Successful!")}) //If successful
    .catch(err => console.log(err)); //If there is an error

//our app listens the port 3000
app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
});
