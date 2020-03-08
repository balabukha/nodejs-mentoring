import dotenv from 'dotenv';

dotenv.config();

export const HOST = process.env.DB_HOST;
export const DATABASE = process.env.DB_DATABASE;
export const USER = process.env.DB_USER;
export const PORT = process.env.DB_PORT;
export const PASSWORD = process.env.DB_PASSWORD;
export const JWT_SECRET = process.env.JWT_SECRET;

// for pg using
export const { URI } = `postgres://${USER}:${PASSWORD}@${HOST}:${PORT}/${DATABASE}`;

export const APP_PORT = process.env.APP_PORT;
