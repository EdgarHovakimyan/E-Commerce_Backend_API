const express = require("express");
const { UserController } = require("../controller/UserController");
const user = express.Router();

user.get("/profile", UserController.getUser);
user.get("/categories", UserController.getCategory);
user.get("/category/:id", UserController.getCategoryById);
user.get("/sub-categories", UserController.getSubcategory);
user.get("/sub-categories/:id", UserController.getSubcategoryById);
user.get("/products", UserController.getProduct);
user.get("/product/:id", UserController.getProductById);

user.patch("/updateData", UserController.updateUser);
user.patch("/updateImage", upload.single("image"), UserController.updateUserImage);
user.patch("/updatePassword", UserController.updateUserPassword);

user.delete("/deleteUser", UserController.deleteUser);

module.exports = { user };
