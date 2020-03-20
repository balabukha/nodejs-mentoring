import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config';
import common from '../common';

export const token = () => jwt.sign({
    exp: common.ONE_HOUR,
    access: true }, JWT_SECRET);
