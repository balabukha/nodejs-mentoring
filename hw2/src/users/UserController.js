import UserService from './UserService';

exports.getUsers = async function (req, res) {
  try {
    let { login, limit } = req.query;
    const users = await UserService.getUsers(limit, login);
    res.status(200).json(users);
  }
  catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.getUser = async function (req, res) {

  try {
    let { id } = req.params;
    const users = await UserService.getUser(id);
    res.status(200).json(users);
  }
  catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.getAllUsers = async function (req, res) {

  try {
    let { id } = req.params;
    const users = await UserService.getAllUsers(id);
    res.status(200).json(users);
  }
  catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.createUser = async function (req, res) {

  try {
    const { login, password, age } = req.body;
    const user = await UserService.createUser(login, password, age);
    res.status(200).json(user);
  }
  catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.updateUser = async function (req, res) {

  try {
    const { id } = req.params;
    const { login, password, age } = req.body;

    const user = await UserService.updateUser(login, password, age, id);
    res.status(200).json(user);
  }
  catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.deleteUser = async function (req, res) {
  try {
    const { id } = req.params;
    const user = await UserService.deleteUser(id);
    res.status(200).json(user);
  }
  catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};
