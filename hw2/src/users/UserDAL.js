import Sequelize from 'sequelize';
import Users from '../loaders/userModel';
const Op = Sequelize.Op;

export default {
    getUsers(limit, login) {
        return Users.findAll({
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
        return Users.findAll({
            where: {
                id
            }
        });
    },

    getAllUsers() {
        return Users.findAll({
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
        return Users.create({
            login,
            password,
            age,
            isdeleted: false
        });
    },

    updateUser(login, password, age, id) {
        return Users.update({
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
        return Users.update({
            isdeleted: true
        }, {
            where: {
                id
            }
        });
    }
};
