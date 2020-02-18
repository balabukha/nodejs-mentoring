import sequelize from './db';
import Sequelize from 'sequelize';

const Group = sequelize.define('group', {
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
});

export default Group;
