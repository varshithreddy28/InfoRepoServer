const User = require("../model/user");
const jwt = require("jsonwebtoken");

exports.validateUser = (req, res, next) => {
  // const token = req.cookies.tokenuser;
  const token = req.headers.authorization;
  let user = null;
  console.log("Validate User : ");
  console.log(req.cookies);
  if (!token) {
    return res
      .status(401)
      .json({ status: false, message: "User Validation Failed" });
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.status(401).json({ status: false, message: err.message });
    } else {
      user = await User.findById(data.id);

      if (!user)
        return res
          .status(401)
          .json({ status: false, message: "Invalid User Entry" });
      else if (user) {
        req.user = user;
      }
    }
  });
  if (user) {
    req.user = user;
  }
  next();
};
