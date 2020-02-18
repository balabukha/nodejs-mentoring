import UserDAL from './UserDAL';

export default {
    getUsers(limit, login) {
        const userLimit = +limit || 30;
        const userLogin = login || '';

        return UserDAL.getUsers(userLimit, userLogin);
    },

    getUser(id) {
        if (id) {
            return UserDAL.getUser(id);
        }

        return Promise.reject();
    },

    getAllUsers() {
        return UserDAL.getAllUsers();
    },

    createUser(login, password, age) {
        if (login && password && age) {
            return UserDAL.createUser(login, password, age);
        }

        return Promise.reject();
    },

    updateUser(login, password, age, id) {
        if (login && password && age && id) {
            return UserDAL.updateUser(login, password, age, id);
        }

        return Promise.reject();
    },

    deleteUser(id) {
        if (id) {
            return UserDAL.deleteUser(id);
        }

        return Promise.reject();
    }
};

