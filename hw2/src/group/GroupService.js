import GroupDAL from './GroupDAL';
import uuidv4 from 'uuid/v4';


export default {
    getAllGroups() {

        return GroupDAL.getAllGroups();
    },

    getGroup(id) {
        if (id) {
            return GroupDAL.getGroup(id);
        }

        return Promise.reject();
    },

    createGroup(name, permission) {
        const UUID  = uuidv4();
        if (name && permission) {
            return GroupDAL.createGroup(UUID, name, permission);
        }

        return Promise.reject();
    },

    updateGroup(name, permission, id) {
        if (name && permission && id) {
            return GroupDAL.updateGroup(name, permission, id);
        }

        return Promise.reject();
    },

    deleteGroup(id) {
        if (id) {
            return GroupDAL.deleteGroup(id);
        }

        return Promise.reject();
    }
};

