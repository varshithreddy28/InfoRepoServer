const express = require("express");
const router = express.Router();

const authController = require("../controller/auth");
const { validateUser } = require("../middleware/verifytoken");

router.post("/signup", authController.signUpPost);
router.post("/login", authController.loginPost);

router.post("/validate", authController.validatePost);

exports.authRouters = router;
