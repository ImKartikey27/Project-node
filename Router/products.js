const express= require('express')
const router= express.Router()
const productController= require('../controller/products')

router
  .post("/", productController.create)
  .get("/", productController.readall)
  .get("/:id", productController.readone)
  .put("/:id", productController.replace)
  .patch("/:id", productController.update)
  .delete("/:id", productController.remove);

exports.router=router

