const { User, Registration } = require("../db/relations");
const bcrypt = require("bcrypt");

const registrationType = {
  MANUAL: "MANUAL",
  GOOGLE: "GOOGLE",
  APPLE: "APPLE",
};
exports.getUserDetails = async (req, res) => {
  try {
    const user = await User.findAll();
    return res.json({
      success: true,
      result: { user },
    });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

exports.registerUser = async (req, res) => {
  try {
    // TODO : Joi validation
    const { firstName, lastName, email, password } = req.body;
    // email should be uniqe
    const displayName = firstName + " " + lastName;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const registration = await Registration.create({
      registrationType: registrationType.MANUAL,
      password: hashedPassword,
    });
    console.log(registration.registrationId);
    return res.json({
      success: true,
      result: true,
    });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};
