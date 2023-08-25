const express=require("express");
const router = express.Router();
const productController = require("../Controllers/productController");
const isAdmin    = require("../middleWares/isAdmin")
router.get("/",productController.getProductList);
router.get("/",productController.getProductList);
 router.get("/:id",productController.getProductById);
 router.delete("/:id",isAdmin,  productController.deleteProduct);

router.post("/",productController.createProduct);
router.put(
    "/:id",
    
  productController.updateProduct
  );



module.exports = router;