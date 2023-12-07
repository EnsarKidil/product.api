//This is the app file
//App file is the place that our API will run

const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./Routes/ApiRoutes');
const { errorHandler } = require('./CustomMiddlewares/ErrorHandlingMiddleware');

const app = express();
const port = 3000;

app.use(express.json());
app.use('/Product', productRoutes);
app.use(errorHandler);

mongoose.connect('mongodb://localhost:27017/ProductsDB') //MongoDB connection
    .then(() => {console.log("Connection Successful!")}) //If successful
    .catch(err => console.log(err)); //If there is an error

app.listen(port,() => {
    console.log('Server is running on port 3000');
});
