const express = require("express");
const multer = require("multer");

const { hashPassword, verifyPassword } = require("./services/auth");
const uploadFile = require("./services/uploadFile");

const authControllers = require("./controllers/authControllers");
const postControllers = require("./controllers/postControllers");
const taskControllers = require("./controllers/taskControllers");
const userControllers = require("./controllers/userControllers");

const router = express.Router();

const upload = multer({ dest: "./public/uploads/images/" });

router.post("/upload", upload.single("file"), uploadFile.postFile);

router.post("/register", hashPassword, authControllers.register);
router.post("/login", authControllers.login, verifyPassword);
router.post("/logout", authControllers.logout);

router.get("/posts", postControllers.getAll);
router.get("/posts/:id", postControllers.getOnePost);
router.post("/posts", postControllers.createPost);
router.put("/posts/:id", postControllers.updatePost);
router.delete("/posts/:id", postControllers.deletePost);

router.get("/users", userControllers.getAllUsers);
router.get("/users/:id", userControllers.getOneUser);
router.post("/users", hashPassword, userControllers.createUser);
router.put("/users/:id", hashPassword, userControllers.updateUser);
router.delete("/users/:id", userControllers.deleteUser);

router.get("/", taskControllers.getAllTasks);
router.get("/:id", taskControllers.getOneTask);
router.post("/", taskControllers.createTask);
router.put("/:id", taskControllers.updateTask);
router.delete("/:id", taskControllers.deleteTask);

module.exports = router;
