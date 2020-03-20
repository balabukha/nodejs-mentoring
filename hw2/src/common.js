export default {
    MIN_AGE_VALIDATION: 4,
    MAX_AGE_VALIDATION: 130,
    LOGIN_PASSWORD_PATTERN: /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/,
    JWT_TOKEN_ERROR: 'JsonWebTokenError',
    JWT_EXPIRED_ERROR: 'TokenExpiredError',
    ONE_HOUR: Math.floor(Date.now() / 1000) + (60 * 60)
};
