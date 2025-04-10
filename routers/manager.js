const express = require("express");
const { ManagerController } = require("../controller/ManagerController");
const { upload } = require("../upload/config");
const manager = express.Router();


manager.post("/products", ManagerController.addProduct);

manager.get("/products", ManagerController.getMyProduct);

manager.patch("/product/:id", ManagerController.updateProduct);
manager.patch("/product/addImage/:id", upload.array("image"), ManagerController.addProductImage);
manager.patch("/product/updateImage/:id", upload.single("image"),ManagerController.updateProductImage);

manager.delete("/product/:id", ManagerController.deleteProduct);
manager.delete("/productImage/:id", ManagerController.deleteProductImage);

module.exports = { manager };
