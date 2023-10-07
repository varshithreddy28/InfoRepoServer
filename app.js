const express = require("express");
const app = express();
const path = require("path");
const pathHelper = require("./utils/pathHelper");
const mongoose = require("mongoose");
const cors = require("cors");

// Form's Routes
const formOneRoute = require("./routes/firstForm");

mongoose
  .connect(
    "mongodb+srv://varshithreddy:varshith19@cluster0.9hmrp.mongodb.net/infoRepo"
  )
  .then((result) => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log("Error in connecting to DB");
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(formOneRoute);

app.listen(3000, () => {
  console.log("Listening on Port 3000");
});
