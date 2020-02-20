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
        classMethods: {
            associate(models) {
                Users.belongsToMany(models.users, {
                    through: 'usersgroup',
                    as: 'users',
                    foreignKey: 'userid',
                    otherKey: 'groupid'
                });
            }
        },
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
    },
    {
        classMethods: {
            associate(models) {
                Group.belongsToMany(models.group, {
                    through: 'usersgroup',
                    as: 'group',
                    foreignKey: 'groupid',
                    otherKey: 'userid'
                });
            }
        },
        timestamps: false
    }),
    UserGroup: sequelize.define('usersgroup', {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
            allowNull: true
        },
        userid: {
            type: Sequelize.STRING
        },
        groupid: {
            type: Sequelize.STRING
        }
    }, {
        classMethods: {
            associate(models) {
                UserGroup.belongsTo(models.Users, {
                    foreignKey: 'userid',
                    as: 'group'
                });
                UserGroup.belongsTo(models.Group, {
                    foreignKey: 'groupid',
                    as: 'users'
                });
            }
        },
        timestamps: false
    })
};
