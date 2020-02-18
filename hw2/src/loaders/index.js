import expressLoader from './express';
import Users from './userModel';
import sequelize from './db.js';

export default async ({ expressApp }) => {
    await expressLoader({ app: expressApp });
    await sequelize;
    console.log('Express Intialized');
    await new Users();
};
