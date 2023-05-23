const express = require("express");
// The `express.Router()` function returns a new router object
const router = express.Router();
const authControllers = require("../controllers/auth/authControllers");
const Joi = require("joi");
// Create a validator instance
const validator = require("express-joi-validation").createValidator({});

const registerSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(12).required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
  mail: Joi.string().email().required(),
});

const loginSchema = Joi.object({
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
  mail: Joi.string().email().required(),
});

// validator.body() validates the data coming in the request body of the POST request
router.post(
  "/register",
  validator.body(registerSchema),
  authControllers.controllers.postRegister
);
router.post(
  "/login",
  validator.body(loginSchema),
  authControllers.controllers.postLogin
);

module.exports = router;
