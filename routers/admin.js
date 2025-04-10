const express = require("express");
const { AdminController } = require("../controller/AdminController");
const { upload } = require("../upload/config");
const admin = express.Router();

admin.post("/categories",upload.single("image"),AdminController.addCategory);
admin.post("/sub-categories", AdminController.addSubCategory);

admin.patch("/categories/:id",upload.single("image"), AdminController.updateCategory);
admin.patch("/sub-categories/:id", AdminController.updateSubCategory);
admin.patch("/blockUser/:id", AdminController.blockUserById);

admin.delete("/categories/:id",AdminController.deleteCategory);
admin.delete("/sub-categories/:id",AdminController.deleteSubCategory);
admin.delete("/user/:id",AdminController.deleteUserById);

module.exports = { admin };

