const express = require("express");
const router = express.Router();
const userController = require("../Controllers/userController");
// const productController =require("../Controllers/productController")

router.post("/signup", userController.registerUser);

router.post("/login", userController.loginUser);

module.exports = router;
