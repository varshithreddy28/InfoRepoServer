const User = require("../model/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.signUpPost = async (req, res, next) => {
  try {
    const {
      password,
      confirmPassword,
      emailid,
      mobilenumber,
      placeofwork,
      designation,
      name,
      district,
    } = req.body;

    if (password !== confirmPassword) {
      return res
        .status(400)
        .json({ status: false, message: "Passwords didnt Matched" });
    } else {
      const user = await User.findOne({ emailid: req.body.emailid });

      if (user)
        return res
          .status(400)
          .json({ status: false, message: "User already Exists" });
      // If user dosent exists then we are creating new user
      const passwordBcrypt = await bcrypt.hash(password, 12);
      const newUser = new User({
        name,
        emailid,
        password: passwordBcrypt,
        mobilenumber,
        placeofwork,
        designation,
        district,
      });
      const savedUser = await newUser.save();

      const token = jwt.sign({ id: savedUser._id }, process.env.TOKEN_KEY);
      res.cookie("token", token, {
        secure: true,
        withCredentials: true,
        httpOnly: false,
        sameSite: "none",
      });
      res.status(201).json({
        message: "User signed in successfully",
        success: true,
        savedUser,
      });
    }
  } catch (error) {
    console.log(error);
    console.log("Error in Creating the User");
    res.status(500).json({ status: false, message: error.message });
  }
};

exports.loginPost = async (req, res, next) => {
  try {
    const { emailid } = req.body;
    const foundUser = await User.findOne({ emailid });

    if (!foundUser)
      res.status(400).json({ status: false, message: "User not Found" });
    else {
      const compare = await bcrypt.compare(
        req.body.password,
        foundUser.password
      );
      if (!compare)
        return res
          .status(400)
          .json({ status: false, message: "Please Enter a Valid Password!" });
      const token = jwt.sign({ id: foundUser._id }, process.env.TOKEN_KEY);
      res.cookie("token", token, {
        secure: true,
        withCredentials: true,
        httpOnly: false,
        sameSite: "none",
      });
      res.status(201).json({
        message: "User signed in successfully",
        success: true,
        foundUser,
      });
    }
  } catch (error) {
    console.log(error);
    console.log("Error in Logging the User");
    res.status(500).json({ status: false, message: error.message });
  }
};

exports.validatePost = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res
      .status(500)
      .json({ status: false, message: "User Validation Failed" });
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.status(500).json({ status: false, message: err.message });
    } else {
      let user = await User.findById(data.id);

      if (!user)
        return res
          .status(500)
          .json({ status: false, message: "Invalid User Entry" });
      else if (user) {
        user["password"] = null;
        res.json({
          message: "Validation of User Successfull",
          success: true,
          foundUser: user,
        });
      }
    }
  });
};
