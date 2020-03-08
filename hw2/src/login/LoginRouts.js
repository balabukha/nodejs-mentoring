import express from 'express';
import LoginController from './LoginController';
import expressJoiValidation from 'express-joi-validation';
import { authQuerySchema } from '../schema/joi.js';

const validator = expressJoiValidation.createValidator({});

const router = express.Router();

router.post('/', validator.body(authQuerySchema), LoginController); // +

export default router;
