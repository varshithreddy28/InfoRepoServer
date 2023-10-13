const express = require("express");
const router = express.Router();

const addData = require("../controller/addData");
const { validateUser } = require("../middleware/verifytoken");

router.post("/addformOne", validateUser, addData.addDataFormOne);
router.post("/addformTwo", validateUser, addData.addDataFormTwo);

module.exports = router;
