const express = require("express");
const router = express.Router();

const addData = require("../controller/addData");

router.post("/addformOne", addData.addDataFormOne);
router.post("/addformTwo", addData.addDataFormTwo);

module.exports = router;
