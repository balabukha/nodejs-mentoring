import Sequelize from 'sequelize';
import { DATABASE, HOST, PASSWORD, USER } from '../config';

const sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
    host: HOST,
    dialect: 'postgres',
    dialectOptions: {
        ssl: true
    }
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

export default sequelize;
