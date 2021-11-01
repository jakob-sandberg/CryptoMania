const express = require("express");
const router = express.Router();

const userController = require("../controllers/UserController");

router.get("/whoami", userController.whoami);
router.put("/:userId", userController.editUser); //Edit User
router.post("/login", userController.loginUser);
router.get("/logout", userController.logout); //log out user
router.get("/:userId", userController.getUserById);
router.post("/register", userController.createUser);
router.get("", userController.getAllUsers);

module.exports = router;
