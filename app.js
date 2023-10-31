const express = require("express");
require("dotenv/config");
const app = express();
const path = require("path");
const pathHelper = require("./utils/pathHelper");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// Form's Routes
const formOneRoute = require("./routes/firstForm");
const { authRouters } = require("./routes/auth");

app.use(
  cors({
    origin: true,
  })
);

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

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

// app.use(
//   cors({
//     origin: [
//       "https://stately-salamander-7df738.netlify.app",
//       "http://localhost:3001",
//     ],
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
//   })
// );

app.use(cookieParser());

app.use(formOneRoute);
app.use(authRouters);

app.listen(3000, () => {
  console.log("Listening on Port 3000");
});
