import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config';

export default (req, res, next) => {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

    if (token) {
        try {
            const decoded = jwt.verify(token, JWT_SECRET);
            // some logic with decoded
            return next();
        } catch (err) {
            res.status(401).json({ message: 'user is not auth' });
        }
    }
};
