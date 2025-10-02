// Product routes
const express = require('express');
const router = express.Router();

const productController = require('../controllers/product.controller.js');

// GET all products
router.get('/', productController.getAllProducts);
// GET product by id
router.get('/:id', productController.getProductById);
// POST create product
router.post('/create', productController.createProduct);
// PUT update product
router.patch('/:id', productController.updateProduct);
// DELETE product
router.delete('/:id', productController.deleteProduct);

module.exports = router;
