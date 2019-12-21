const Joi = require("joi");
const common = require("../common");

const querySchema = Joi.object({
  login: Joi.string()
    .required()
    .regex(common.LOGIN_PATTERN)
    .required(),
  password: Joi.string().required(),
  age: Joi.number()
    .integer()
    .min(common.MIN_AGE_VALIDATION)
    .max(common.MAX_AGE_VALIDATION)
    .required(),
  isDeleted: Joi.boolean().required()
});

module.exports = querySchema;
