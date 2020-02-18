import Joi from 'joi';
import common from '../common';

export const userQuerySchema = Joi.object({
    login: Joi.string()
        .required()
        .regex(common.LOGIN_PASSWORD_PATTERN)
        .required(),
    password: Joi.string()
        .required()
        .regex(common.LOGIN_PASSWORD_PATTERN)
        .required(),
    age: Joi.number()
        .integer()
        .min(common.MIN_AGE_VALIDATION)
        .max(common.MAX_AGE_VALIDATION)
        .required(),
    isdeleted: Joi.boolean()
});

export const groupQuerySchema = Joi.object({
    id: Joi.string(),
    name: Joi.string()
        .required(),
    permission: Joi.string()
        .valid(['READ', 'WRITE', 'DELETE', 'SHARE', 'UPLOAD_FILES']).required()
});
