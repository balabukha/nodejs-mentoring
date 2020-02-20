import models from '../loaders/models';

export default {
    getAllGroups() {
        return models.Group.findAll({
            raw: true
        });
    },

    getGroup(id) {
        return models.Group.findAll({
            where: {
                id
            }
        });
    },

    createGroup(id, name, permission) {
        return models.Group.create({
            id,
            name,
            permission
        });
    },

    updateGroup(name, permission, id) {
        return models.Group.update({
            name,
            permission
        }, {
            where: {
                id
            }
        });
    },

    deleteGroup(id) {
        return models.Group.destroy({
            where: {
                id
            }
        });
    }
};
