const models = require("../models");

const register = (req, res) => {
  const newUser = req.body;

  models.auth
    .checkUserExists(newUser)
    .then(([existingUsers]) => {
      let userExists = false;
      for (const existingUser of existingUsers) {
        if (
          newUser.email === existingUser.email ||
          newUser.username === existingUser.username
        ) {
          userExists = true;
          break;
        }
      }

      if (userExists) {
        res.status(409).json("User already exists");
      } else {
        models.user
          .insert(newUser)
          .then((createdUser) => {
            res
              .status(201)
              .json({ createdUser, Message: "User has been created" });
          })
          .catch((err) => {
            console.error(err);
            res.status(500).json({ Error500: "Error creating user" });
          });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ Error500: "Error checking user existence" });
    });
};

const login = (req, res, next) => {
  const checkEmail = req.body;

  models.auth
    .checkUserByEmail(checkEmail)
    .then(([existingUsers]) => {
      let userExists = false;
      let user = null;

      for (const existingUser of existingUsers) {
        if (checkEmail.email === existingUser.email) {
          userExists = true;
          user = existingUser;
          break;
        }
      }

      if (!userExists) {
        res.status(409).json("User doesn't exists");
      } else {
        req.user = user;
        next();
      }
    })

    .catch((err) => {
      console.error(err);
      res.status(500).json({ Error500: "Error checking user existence" });
    });
};

const logout = (req, res) => {};

module.exports = {
  register,
  login,
  logout,
};
