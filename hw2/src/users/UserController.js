import UserService from './UserService';
import logger from '../logger';

const serviceName = 'UserService';

export default {
    async getUsers(req, res, next) {
        try {
            const { login, limit } = req.query;
            const users = await UserService.getUsers(limit, login);
            if (users && users.length) {
                res.status(200).json(users);
            }

            logger.warn({
                service: serviceName,
                method: req.method,
                query: { login, limit },
                message: 'Users are not found'
            });
            res.status(400);
            res.end('Users are not found');
        } catch (e) {
            const { login, limit } = req.query;

            logger.warn({
                service: serviceName,
                method: req.method,
                query: { login, limit },
                message: e.message
            });

            next(e);
        }
    },

    async getUser(req, res, next) {
        try {
            const { id } = req.params;
            const users = await UserService.getUser(id);
            if (users && users.length) {
                res.status(200).json(users);
            }

            logger.warn({
                service: serviceName,
                method: req.method,
                params: id,
                message: 'User is not found'
            });
            res.status(400);
            res.end('User is not found');
        } catch (e) {
            const { id } = req.params;

            logger.warn({
                service: serviceName,
                method: req.method,
                params: id,
                message: e.message
            });

            next(e);
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

