import UserGroupService from './UserGroupService';

export default {
    async addUsersToGroup(req, res) {
        try {
            const groupId = req.params.id;
            const { userIds } = req.body;
            const result = await UserGroupService.addUsersToGroup(groupId, userIds);
            res.status(200).json(result);
        } catch (e) {
            return res.status(400).json({ status: 400, message: e });
        }
    }
};
