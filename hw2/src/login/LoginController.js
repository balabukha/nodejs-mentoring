import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config';

export default async (req, res) => {
    try {
        const { login, password } = req.body;

        if (login && password) {
            // some logic to check the login and password;
            const token = jwt.sign({ access: true }, JWT_SECRET);
            res.status(200).json({ jwt: token });
        }
    } catch (e) {
        return res.status(400).json({ status: 400, message: e });
    }
};
