const express = require("express");
const validator = require("express-joi-validation").createValidator({});
const UserController = require('./controllers/user.controller');

const router = express.Router();
const querySchema = require("./schema/joi");

router.get("/users", UserController.getUsers);
router.get("/users/:id", UserController.getUser);
router.get("/all", UserController.getAllUsers);

router.post("/", validator.body(querySchema), UserController.createUser);

router.put("/:id", validator.body(querySchema), UserController.updateUser);

router.delete("/:id", UserController.deleteUser);

module.exports = router;
