import Sequelize from 'sequelize';
import { DATABASE, HOST, PASSWORD, USER } from '../config';

const sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
    host: HOST,
    dialect: 'postgres',
    dialectOptions: {
        ssl: true
    }
});

export default sequelize;
