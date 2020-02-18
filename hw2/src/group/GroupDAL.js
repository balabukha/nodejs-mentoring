import Group from '../loaders/groupModel';

export default {
    getAllGroups() {
        return Group.findAll({
            raw: true
        });
    },

    getGroup(id) {
        return Group.findAll({
            where: {
                id
            }
        });
    },

    createGroup(id, name, permission) {
        return Group.create({
            id,
            name,
            permission
        });
    },

    updateGroup(name, permission, id) {
        return Group.update({
            name,
            permission
        }, {
            where: {
                id
            }
        });
    },

    deleteGroup(id) {
        return Group.destroy({
            where: {
                id
            }
        });
    }
};
