const Form46Model = require("../model/formOne");
const Form46AModel = require("../model/formTwo");

exports.addDataFormOne = async (req, res, next) => {
  // console.log(req.body);
  try {
    const data = req.body;
    const formData = new Form46Model({ ...data });
    await formData.save();
    res.status(200).json({ message: "Data added successfully" });
  } catch (error) {
    console.error(error.message);
    // throw Error({ message: error.message });
    res.status(500).json({ message: error.message });
  }
};
exports.addDataFormTwo = async (req, res, next) => {
  // console.log(req.body);
  try {
    const data = req.body;
    const formData = new Form46AModel({ ...data });
    await formData.save();
    res.status(200).json({ message: "Data added successfully" });
  } catch (error) {
    console.error(error.message);
    // throw Error({ message: error.message });
    res.status(500).json({ message: error.message });
  }
};
