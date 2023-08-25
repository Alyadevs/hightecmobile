const Product = require("../Models/ProductModel");

const getProductList = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    console.error("Error getting products list:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

 const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (err) {
    console.error("Error getting product:", err);
   res.status(500).json({ message: "Internal server error" });
   }
 };

 const deleteProduct = async (req, res) => {
       try {
    const product = await Product.findByIdAndDelete(req.params.id);
     if (!product) {
     return res.status(404).json({ message: "Product not found" });
    }
     res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error);
     res.status(500).json({ message: "Internal server error" });
  }
 };

const createProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      imagePath
    } = req.body;
    const newProduct = new Product({
        name,
        description,
        imagePath
    });
    await newProduct.save();
    res.status(201).json({
      message: "Product created successfully",
      product: newProduct,
    });
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

 const updateProduct = async (req, res) => {
   try {
    const {
      name,
      description,
      imagePath
    } = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        name,
          description,
               imagePath
       
      },
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ message: "Produit not found" });
    }
    res.status(200).json({
      message: "Product updated successfully",
     product: updatedProduct,
    });
  } catch (error) {
    console.error("Error updating product:", error);
     res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getProductList,
  getProductById,
  deleteProduct,
  createProduct,
 updateProduct,
};