const uuidv4 = require("uuid/v4");
let mockData = require("../../mockData").users;

const getAllActiveUsers = data => data.filter(user => !user.isDeleted);

exports.getUsers = function (req, res) {
  try {
    let { login, limit } = req.query;
    limit = +limit || 30;

    let result = login
      ? getAllActiveUsers(mockData.filter(user => user.login.includes(login)))
      : getAllActiveUsers(mockData);

    result = result.sort((a, b) => {
      const nameA = a.login.toLowerCase();
      const nameB = b.login.toLowerCase();
      if (nameA < nameB)
        return -1;
      if (nameA > nameB)
        return 1;
      return 0
    });

    res.status(200).json(result.slice(0, limit));
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.getUser = function (req, res) {
  try {
    let { id } = req.params;
    const result = mockData.filter(user => user.id === id);

    res.status(200).json(result);
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.getAllUsers = function (req, res) {
  try {
    const result = getAllActiveUsers(mockData);

    return res.status(200).json(result);
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.createUser = function (req, res) {
  try {
    const { login, password, age } = req.body;
    const uuid = uuidv4();
    mockData = [...mockData, { id: uuid, login, password, age, isDeleted: false }];

    return res.status(200).json(mockData);
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.updateUser = function (req, res) {
  try {
    const user = mockData.find(user => user.id === req.params.id);
    if (user && !user.isDeleted) {
      const { login, password, age } = req.body;
      const dataWithoutUser = mockData.filter(data => data.id !== user.id);
      mockData = [
        ...dataWithoutUser,
        {
          id: user.id,
          login,
          password,
          age,
          isDeleted: user.isDeleted
        }
      ];
      return res.status(200).json(mockData);
    } else {
      return res.status(400).send("User does not exist or deleted");
    }
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.deleteUser = function (req, res) {
  try {
    const user = mockData.find(user => user.id === req.params.id);
    if (user && !user.isDeleted) {
      user.isDeleted = true;

      return res.status(200).send("User deleted");
    } else {
      return res.status(400).send("User does not exist or already deleted");
    }
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};
