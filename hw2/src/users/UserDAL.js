import models from '../loaders/models';
import Sequelize from 'sequelize';
const Op = Sequelize.Op;

export default {
    getUsers(limit, login) {
        return models.Users.findAll({
            limit,
            where: {
                login: {
                    [Op.like]: `%${login}%`
                }
            },
            users: [
                ['login', 'ASC']
            ],
            raw: true
        });
    },

    getUser(id) {
        return models.Users.findAll({
            where: {
                id
            }
        });
    },

    getAllUsers() {
        return models.Users.findAll({
            where: {
                isdeleted: false
            },
            users: [
                ['login', 'ASC']
            ],
            raw: true
        });
    },

    createUser(login, password, age) {
        return models.Users.create({
            login,
            password,
            age,
            isdeleted: false
        });
    },

    updateUser(login, password, age, id) {
        return models.Users.update({
            login,
            password,
            age
        }, {
            where: {
                id
            }
        });
    },

    deleteUser(id) {
        return models.Users.update({
            isdeleted: true
        }, {
            where: {
                id
            }
        });
    }
};
