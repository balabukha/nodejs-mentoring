import Joi from 'joi';
import common from '../common';

const querySchema = Joi.object({
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

export default querySchema;
