import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config';
import logger from '../logger';
import LoginService from './LoginService';

const serviceName = 'LoginService';

const ONE_HOUR = Math.floor(Date.now() / 1000) + (60 * 60);

export default async (req, res) => {
    try {
        const { login, password } = req.body;

        if (login && password) {
            await LoginService.findAndComparePasswords({ login, password });
            const token = jwt.sign({
                exp: ONE_HOUR,
                access: true }, JWT_SECRET);
            res.status(200).json({ jwt: token });
        }
    } catch (e) {
        const { login } = req.body;

        logger.warn({
            service: serviceName,
            method: req.method,
            query: { login },
            message: 'User is not found'
        });
        return res.status(400).json({ status: 400, message: e });
    }
};
