import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config';
import common from '../common';

export default (req, res, next) => {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

    if (token) {
        try {
            const decoded = jwt.verify(token, JWT_SECRET);
            console.log(' -- decoded --', decoded);
            // some logic with decoded
            return next();
        } catch (err) {
            switch (err.name) {
                case common.JWT_TOKEN_ERROR:
                    return res.status(403).json({ message: 'invalid token' });
                case common.JWT_EXPIRED_ERROR:
                    return res.status(401).json({ message: 'user is not auth' });
                default: res.status(400).json({ message: 'server error' });
            }
        }
    }
};
