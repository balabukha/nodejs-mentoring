import sequelize from './db';
import Sequelize from 'sequelize';

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

const Users = sequelize.define('users', {
    login: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    age: {
        type: Sequelize.INTEGER
    },
    isdeleted: {
        type: Sequelize.BOOLEAN
    }
}, {
    timestamps: false
});

export default Users;
