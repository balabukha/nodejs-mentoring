const express = require("express");
const uuidv4 = require("uuid/v4");
const validator = require("express-joi-validation").createValidator({});

const router = express.Router();
const querySchema = require("./schema/joi");
let mockData = require("../mockData").users;

const getAllActiveUsers = data => data.filter(user => !user.deleted);

router.get("/list", (req, res) => {
  const result = getAllActiveUsers(mockData);
  res.json(result);
});

router.get("/users", (req, res) => {
  let { login, limit } = req.query;
  limit = +limit || 30;

  const result = login
    ? mockData.filter(user => user.login.includes(login))
    : getAllActiveUsers(mockData);

  res.json(result.slice(0, limit));
});

router.post("/", validator.body(querySchema), (req, res) => {
  const { login, password, age, isDeleted } = req.body;
  const uuid = uuidv4();

  const result = [...mockData, { id: uuid, login, password, age, isDeleted }];
  res.json(result);
});

router.put("/:id", (req, res) => {
  const user = mockData.find(user => user.id === req.params.id);
  if (user && !user.isDeleted) {
    const { id, login, password, age, isDeleted } = req.body;
    const dataWithoutUser = mockData.filter(user => user.id !== id);
    const result = [
      ...dataWithoutUser,
      {
        id,
        login,
        password,
        age,
        isDeleted
      }
    ];
    res.json(result);
  } else {
    res.status(400).send("User does not exist or deleted");
  }
});

router.delete("/:id", (req, res) => {
  const user = mockData.find(user => user.id === req.params.id);
  if (user && !user.isDeleted) {
    const { id, login, password, age } = user;
    const dataWithoutUser = mockData.filter(user => user.id !== id);

    const result = [
      ...dataWithoutUser,
      {
        id,
        login,
        password,
        age,
        isDeleted: true
      }
    ];
    res.json(result);
  } else {
    res.status(400).send("User does not exist or already deleted");
  }
});

module.exports = router;
