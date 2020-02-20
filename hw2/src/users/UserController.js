import UserService from './UserService';

export default {
    async getUsers(req, res) {
        try {
            const { login, limit } = req.query;
            const users = await UserService.getUsers(limit, login);
            res.status(200).json(users);
        } catch (e) {
            return res.status(400).json({ status: 400, message: e.message });
        }
    },

    async getUser(req, res) {
        try {
            const { id } = req.params;
            const users = await UserService.getUser(id);
            res.status(200).json(users);
        } catch (e) {
            return res.status(400).json({ status: 400, message: e.message });
        }
    },

    async getAllUsers(req, res) {
        try {
            const { id } = req.params;
            const users = await UserService.getAllUsers(id);
            res.status(200).json(users);
        } catch (e) {
            return res.status(400).json({ status: 400, message: e.message });
        }
    },

    async createUser(req, res) {
        try {
            const { login, password, age } = req.body;
            const user = await UserService.createUser(login, password, age);
            res.status(200).json(user);
        } catch (e) {
            return res.status(400).json({ status: 400, message: e.message });
        }
    },

    async updateUser(req, res) {
        try {
            const { id } = req.params;
            const { login, password, age } = req.body;

            const user = await UserService.updateUser(login, password, age, id);
            res.status(200).json(user);
        } catch (e) {
            return res.status(400).json({ status: 400, message: e.message });
        }
    },

    async deleteUser(req, res) {
        try {
            const { id } = req.params;
            const user = await UserService.deleteUser(id);
            res.status(200).json(user);
        } catch (e) {
            return res.status(400).json({ status: 400, message: e.message });
        }
    }
};

