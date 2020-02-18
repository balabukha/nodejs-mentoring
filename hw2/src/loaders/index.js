import expressLoader from './express';
// import Users from './userModel';
// import Group from './groupModel';
import sequelize from './db.js';
import models from './models';

export default async ({ expressApp }) => {
    await expressLoader({ app: expressApp });
    await sequelize;
    console.log('Express Intialized');
    await new models.Users();
    await new models.Group();
    await sequelize.sync({ force: false }); // for change to Executing (default): CREATE TABLE IF NOT EXISTS "users"
};
