How To Run The Application

Installing The Dependencies
-First of all, the dependent libraries should be installed to run the application.
-In the package.json, the libraries are specified.
-To install the dependencies, you need to open a terminal and write "npm install".

Database Connection
-In this project, mongodb database is used.
-This is why you need to connect to a mongodb database to run the application.
-I've installed mongodb's local machine to my desktop.
-To install the local machine, MongoDB Community Server must be downloaded.
-Optionally, MongoDB Compass serves a clear UI to check the database.
-After setting up mongodb localhost to our computer, we will need a connection string from the database.
-You should change the MONGODB_URI variable on .env file with your connection string.
-After completing these steps, you should be ready to connect mongodb localhost.

Running the application
-To run the application, you should open the terminal in the product.api folder and type "node app.js".
-CTRL + C terminates the application.
-Swagger UI is implemented in this project.
-So, you should be able to open swagger UI with the URL "http://localhost:{Port, Default is 3000}/swagger/Product".
-You can see the schemas used in this project and see the endpoints on there.
-To make a call, all you need to do is select "Try It Out" and fill the required fields.
