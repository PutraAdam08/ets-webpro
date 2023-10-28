const db = require("../models");
const User = db.User;

checkDuplicateEmail = async (req, res, next) => {
  try {
    // Email
    user = await User.findOne({
      where: {
        Email: req.body.Email
      }
    });

    if (user) {
      return res.status(400).send({
        message: "Failed! Email is already in use!"
      });
    }

    next();
  } catch (error) {
    return res.status(500).send({
      message: "Unable to validate Email!"
    });
  }
};


const verifySignUp = {
  checkDuplicateEmail
};

module.exports = verifySignUp;