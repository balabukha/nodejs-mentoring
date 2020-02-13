import Sequelize from 'sequelize';
import Users from '../loaders/userModel';
const Op = Sequelize.Op;

exports.getUsers = function(limit, login) {
  return Users.findAll({
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
  })
};

exports.getUser = function(id) {
  return Users.findAll({
    where: {
      id: id,
    }
  })
};

exports.getAllUsers = function() {
  return Users.findAll({
    where: {
      isdeleted: false
    },
    users: [
      ['login', 'ASC'],
    ],
    raw: true,
  })
};

exports.createUser = function(login, password, age) {
  return Users.create({
    login,
    password,
    age,
    isdeleted: false,
  })
};

exports.updateUser = function(login, password, age, id) {
  return Users.update({
    login,
    password,
    age,
  }, {
    where: {
      id: id
    }
  })
};

exports.deleteUser = function(id) {
  return Users.update({
    isdeleted: true,
  }, {
    where: {
      id: id
    }
  })
};
