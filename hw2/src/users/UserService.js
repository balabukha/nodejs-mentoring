import UserDAL from './UserDAL';

exports.getUsers = function(limit, login) {
    const userLimit = +limit || 30;
    const userLogin = login || '';

  return UserDAL.getUsers(userLimit, userLogin)
};

exports.getUser = function(id) {
  if (id) {
    return UserDAL.getUser(id)
  }

  return Promise.reject()

};

exports.getAllUsers = function() {
    return UserDAL.getAllUsers()
};

exports.createUser = function(login, password, age) {
  if (login && password && age) {
    return UserDAL.createUser(login, password, age)
  }

  return Promise.reject()
};

exports.updateUser = function(login, password, age, id) {
  if (login && password && age && id) {
    return UserDAL.updateUser(login, password, age, id)
  }

  return Promise.reject()
};

exports.deleteUser = function(id) {
  if (id) {
    return UserDAL.deleteUser(id)
  }

  return Promise.reject()
};
