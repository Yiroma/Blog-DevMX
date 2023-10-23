const models = require("../models");

const getAllUsers = (req, res) => {
  models.user
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ Error500: "Table not found" });
    });
};

const getOneUser = (req, res) => {
  models.user
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.status(404).json({ Error404: "User not found" });
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ Error500: "Error connecting to database" });
    });
};

const createUser = (req, res) => {
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

const updateUser = (req, res) => {
  const user = req.body;

  user.id = parseInt(req.params.id, 10);

  models.user
    .update(user)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).json({ Error404: "User not found" });
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ Error500: "Error to updating user" });
    });
};

const deleteUser = (req, res) => {
  const userId = req.params.id;
  models.user
    .delete(userId)
    .then(() => {
      res.status(200).json({ message: "User has been deleted" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ Error500: "Error to DELETE user" });
    });
};

module.exports = {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
};
