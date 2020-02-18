import Sequelize from 'sequelize';
import sequelize from './db';

export default {
    Users: sequelize.define('users', {
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
    }),
    Group: sequelize.define('group', {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
            allowNull: true
        },
        name: {
            type: Sequelize.STRING
        },
        permission: {
            type: Sequelize.ENUM('READ', 'WRITE', 'DELETE', 'SHARE', 'UPLOAD_FILES')
        }
    }, {
        timestamps: false
    })
};
