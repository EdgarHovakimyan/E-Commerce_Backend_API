const express = require("express");
const { CustomerController } = require("../controller/CustomerController")
const customer = express.Router();

customer.get("/wishlist", CustomerController.getWishlist);
customer.get("/card", CustomerController.getCard);

customer.delete("/wishlist/:id", CustomerController.deleteWishlistById);
customer.delete("/card/:id", CustomerController.deleteCardById);

module.exports = { customer }