const models = require("../models");

const register = (req, res, next) => {
  // CHECK EXISTING USER
  const { email, username } = req.body;

  models.auth.checkUser(email, username).then((result) => {
    console.log(result);
    if (result.email === email || result.username === username) {
      res.status(409).json({ error: "User already exists authControllers" });
    } else {
      next();
    }
  });
};
const login = (req, res) => {};
const logout = (req, res) => {};

module.exports = {
  register,
  login,
  logout,
};
