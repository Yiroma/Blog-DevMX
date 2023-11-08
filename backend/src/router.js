const express = require("express");
const multer = require("multer");

const router = express.Router();

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

// PUBLIC ROUTES -----
router.post("/login", authControllers.login, verifyPassword);
router.post("/register", hashPassword, authControllers.register);

// PROTECTED ROUTES -----
router.use(verifyToken);

router.get("/posts", postControllers.getAll);
router.get("/posts/:id", postControllers.getOnePost);
router.get("/users", userControllers.getAllUsers);
router.get("/users/:id", userControllers.getOneUser);

router.post("/posts", postControllers.createPost);
router.post("/users", hashPassword, userControllers.createUser);
router.post("/logout", authControllers.logout);

router.put("/posts/:id", postControllers.updatePost);
router.put("/users/:id", hashPassword, userControllers.updateUser);

router.delete("/posts/:id", postControllers.deletePost);
router.delete("/users/:id", userControllers.deleteUser);

// UPLOADS ROUTES -----
router.post("/upload", upload.single("file"), uploadFile.postFile);
router.delete("/deleteImg/:imgName", uploadFile.deleteImg);

module.exports = router;
