const express=require("express");
const router = express.Router();
const productController = require("../Controllers/productController");

router.get("/",productController.getProductList);
 router.get("/:id",productController.getProductById);
 router.delete("/:id",productController.deleteProduct);
router.post("/",productController.createProduct);
 router.put("/:id",productController.updateProduct);



module.exports = router;