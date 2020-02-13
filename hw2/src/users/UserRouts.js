import express from "express";
import UserController from "../users/UserController";
import expressJoiValidation from "express-joi-validation";
import querySchema from "../schema/joi";

const validator = expressJoiValidation.createValidator({});
const router = express.Router();

router.get("/", UserController.getUsers);
router.get("/:id", UserController.getUser);
router.get("/active/all", UserController.getAllUsers);

router.post("/", validator.body(querySchema), UserController.createUser);

router.put("/:id", validator.body(querySchema), UserController.updateUser);

router.delete("/:id", UserController.deleteUser);

module.exports = router;
