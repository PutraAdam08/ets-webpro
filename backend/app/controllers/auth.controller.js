const db = require("../models");
const config = require("../config/auth.config");
const User = db.User;

const Op = db.Sequelize.Op;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.signup = async (req, res) => {
  // Save User to Database
  try {
    const user = await User.create({
        Name: req.body.Name,
        Email: req.body.Email,
        Password: bcrypt.hashSync(req.body.Password, 8),
    });

    if (req.body.user) {
      const user = await User.findAll({
        where: {
          Email: {
            [Op.or]: req.body.Email,
          },
        },
      });

      const result = user.setUser(user);
      if (result) res.send({ message: "User registered successfully!" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.signin = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        Email: req.body.Email,
      },
    });

    if (!user) {
      return res.status(404).send({ message: "User Not found." });
    }

    const PasswordIsValid = bcrypt.compareSync(
      req.body.Password,
      user.Password
    );

    if (!PasswordIsValid) {
      return res.status(401).send({
        message: "Invalid Password!",
      });
    }

    const token = jwt.sign({ Email: user.Email },
                           config.secret,
                           {
                            algorithm: 'HS256',
                            allowInsecureKeySizes: true,
                            expiresIn: 86400, // 24 hours
                           });
                           
    req.session.token = token;

  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

exports.signout = async (req, res) => {
  try {
    req.session = null;
    return res.status(200).send({
      message: "You've been signed out!"
    });
  } catch (err) {
    this.next(err);
  }
};