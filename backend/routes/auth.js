const express = require("express");
const AuthValidators = require("../middlewares/authValidation");
const AuthController = require("../controllers/auth");

const router = express.Router();

router.post("/login", AuthValidators.loginValidation, AuthController.login);

router.post(
  "/register",
  AuthValidators.registerValidation,
  AuthController.register
);

module.exports = router;
