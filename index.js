const express = require("express");
const productController = require("./controller/products");
const productRouter= require('./Router/products');

const server = express();

// body-parsers
server.use(express.json());

// middleware
server.use('/products',productRouter.router)


// starting the server
server.listen(8080, () => {
  console.log("server started");
});
