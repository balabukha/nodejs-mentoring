import UserGroupDAL from './UserGroupDAL';

export default {
    addUsersToGroup(groupId, userIds) {
        if (groupId && userIds.length) {
            return UserGroupDAL.addUsersToGroup(groupId, userIds);
        }

        return Promise.reject();
    }
};

