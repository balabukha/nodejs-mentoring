const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// models
const Users = require('../model/user');

exports.getUsers = function (req, res) {
  try {
    let { login, limit } = req.query;

    limit = +limit || 30;
    login = login || '';

    Users.findAll({
      limit: limit,
      where: {
        login: {
          [Op.like]: `%${login}%`
        }
      },
      users: [
        ['login', 'ASC'],
      ],
      raw: true,
    }).then(function(users) {
      res.status(200).json(users);
    }).catch(Sequelize.ValidationError, function (err) {
      return res.status(422).send(err.errors);
    }).catch(function (err) {
      return res.status(400).json({ message: "error" });
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.getUser = function (req, res) {
  try {
    let { id } = req.params;

    Users.findAll({
      where: {
        id: id,
      }
    }).then(function(result) {
      res.status(200).json(result);
    }).catch(Sequelize.ValidationError, function (err) {
      return res.status(422).send(err.errors);
    }).catch(function (err) {
      return res.status(400).json({ message: "error" });
    })

  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.getAllUsers = function (req, res) {
  try {
    Users.findAll({
      where: {
        isdeleted: false
      },
      users: [
        ['login', 'ASC'],
      ],
      raw: true,
    }).then(function(users) {
      res.status(200).json(users);
    })
      .catch(Sequelize.ValidationError, function (err) {
        return res.status(422).send(err.errors);
      }).catch(function (err) {
      return res.status(400).json({ message: "error" });
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.createUser = function (req, res) {
  try {
    const { login, password, age } = req.body;

    Users.create({
      login,
      password,
      age,
      isdeleted: false,
    }).then(result => res.status(200).json({ status: 200, message: result }))
      .catch(Sequelize.ValidationError, function (err) {
        return res.status(422).send(err.errors);
      }).catch(function (err) {
      return res.status(400).json({ message: "error" });
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.updateUser = function (req, res) {
  try {
    let { id } = req.params;
    const { login, password, age } = req.body;

    Users.update({
      login,
      password,
      age,
    }, {
      where: {
        id: id
      }
    }).then(result => res.status(200).json({ status: 200, message: result }))
      .catch(Sequelize.ValidationError, function (err) {
        return res.status(422).send(err.errors);
      }).catch(function (err) {
      return res.status(400).json({ message: "error" });
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.deleteUser = function (req, res) {
  let { id } = req.params;

  try {
    Users.update({
      isdeleted: true,
    }, {
      where: {
        id: id
      }
    }).then(result => res.status(200).json({ status: 200, message: result }))
      .catch(Sequelize.ValidationError, function (err) {
        return res.status(422).send(err.errors);
      }).catch(function (err) {
      return res.status(400).json({ message: "error" });
    })
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};
