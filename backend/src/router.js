const express = require("express");
const multer = require("multer");

const upload = multer({ dest: "./public/uploads/images/" });
const uploadFile = require("./services/uploadFile");

const {
  hashPassword,
  verifyPassword,
  verifyToken,
} = require("./services/auth");

const authControllers = require("./controllers/authControllers");
const postControllers = require("./controllers/postControllers");
const userControllers = require("./controllers/userControllers");

const router = express.Router();

router.post("/register", hashPassword, authControllers.register);
router.post("/login", authControllers.login, verifyPassword);
router.post("/logout", authControllers.logout);

router.get("/posts", postControllers.getAll);
router.get("/posts/:id", postControllers.getOnePost);
router.post("/posts", verifyToken, postControllers.createPost);
router.put("/posts/:id", verifyToken, postControllers.updatePost);
router.delete("/posts/:id", verifyToken, postControllers.deletePost);

router.get("/users", userControllers.getAllUsers);
router.get("/users/:id", userControllers.getOneUser);
router.post("/users", hashPassword, userControllers.createUser);
router.put("/users/:id", hashPassword, userControllers.updateUser);
router.delete("/users/:id", userControllers.deleteUser);

router.post("/upload", verifyToken, upload.single("file"), uploadFile.postFile);
router.delete("/deleteImg/:imgName", verifyToken, uploadFile.deleteImg);

module.exports = router;
