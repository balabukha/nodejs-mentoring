import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config';

const ONE_HOUR = Math.floor(Date.now() / 1000) + (60 * 60);

export default async (req, res) => {
    try {
        const { login, password } = req.body;

        if (login && password) {
            // some logic to check the login and password;
            const token = jwt.sign({
                exp: ONE_HOUR,
                access: true }, JWT_SECRET);
            res.status(200).json({ jwt: token });
        }
    } catch (e) {
        return res.status(400).json({ status: 400, message: e });
    }
};
