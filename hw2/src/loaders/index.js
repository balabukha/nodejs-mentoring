import expressLoader from './express';
import Users from './userModel';
import Group from './groupModel';
import sequelize from './db.js';

export default async ({ expressApp }) => {
    await expressLoader({ app: expressApp });
    await sequelize;
    console.log('Express Intialized');
    await new Users();
    await new Group();
    await sequelize.sync({ force: false }); // for change to Executing (default): CREATE TABLE IF NOT EXISTS "users"
};
