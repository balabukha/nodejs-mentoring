import sequelize from './db';
import Sequelize from 'sequelize';

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
