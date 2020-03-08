import UserService from './UserService';
import logger from '../logger';

const serviceName = 'UserService';

export default {
    async getUsers(req, res, next) {
        try {
            const { login, limit } = req.query;
            const users = await UserService.getUsers(limit, login);
            if (users && users.length) {
                return res.status(200).json(users);
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

            return next(e);
        }
    },

    async getUser(req, res, next) {
        try {
            const { id } = req.params;
            const users = await UserService.getUser(id);
            if (users && users.length) {
                return res.status(200).json(users);
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

            return next(e);
        }
    },

    async getAllUsers(req, res, next) {
        try {
            const { id } = req.params;
            const users = await UserService.getAllUsers(id);

            if (users && users.length) {
                return res.status(200).json(users);
            }

            logger.warn({
                service: serviceName,
                method: req.method,
                params: id,
                message: 'Users are not found'
            });
        } catch (e) {
            const { id } = req.params;

            logger.warn({
                service: serviceName,
                method: req.method,
                params: id,
                message: e.message
            });

            return next(e);
        }
    },

    async createUser(req, res, next) {
        try {
            const { login, password, age } = req.body;
            const user = await UserService.createUser(login, password, age);

            if (user) {
                return res.status(200).json(user);
            }
        } catch (e) {
            const { login, password, age } = req.body;

            logger.warn({
                service: serviceName,
                method: req.method,
                query: { login, password, age },
                message: e.message
            });

            return next(e);
        }
    },

    async updateUser(req, res, next) {
        try {
            const { id } = req.params;
            const { login, password, age } = req.body;

            const user = await UserService.updateUser(login, password, age, id);

            if (user) {
                return res.status(200).json(user);
            }
        } catch (e) {
            const { id } = req.params;
            const { login, password, age } = req.body;

            logger.warn({
                service: serviceName,
                method: req.method,
                query: { login, password, age },
                params: id,
                message: e.message
            });

            return next(e);
        }
    },

    async deleteUser(req, res, next) {
        try {
            const { id } = req.params;
            const user = await UserService.deleteUser(id);
            if (user) {
                return res.status(200).json(user);
            }
        } catch (e) {
            const { id } = req.params;

            logger.warn({
                service: serviceName,
                method: req.method,
                params: id,
                message: e.message
            });

            return next(e);
        }
    }
};

