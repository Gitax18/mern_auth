const express = require("express");

const ProductController = require("../controllers/product");
const AuthValidators = require("../middlewares/authValidation");

const router = express.Router();

router.get(
  "/product",
  AuthValidators.claimAuthorization,
  ProductController.fetchProducts
);

module.exports = router;
