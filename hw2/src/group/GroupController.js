import GroupService from './GroupService';

export default {
    async getAllGroups(req, res) {
        try {
            const groups = await GroupService.getAllGroups();
            res.status(200).json(groups);
        } catch (e) {
            return res.status(400).json({ status: 400, message: e.message });
        }
    },

    async getGroup(req, res) {
        try {
            const { id } = req.params;
            const users = await GroupService.getGroup(id);
            res.status(200).json(users);
        } catch (e) {
            return res.status(400).json({ status: 400, message: e.message });
        }
    },

    async createGroup(req, res) {
        try {
            const { name, permission } = req.body;
            const group = await GroupService.createGroup(name, permission);
            res.status(200).json(group);
        } catch (e) {
            return res.status(400).json({ status: 400, message: e.message });
        }
    },

    async updateGroup(req, res) {
        try {
            const { id } = req.params;
            const { name, permission } = req.body;

            const user = await GroupService.updateGroup(name, permission, id);
            res.status(200).json(user);
        } catch (e) {
            return res.status(400).json({ status: 400, message: e.message });
        }
    },

    async deleteGroup(req, res) {
        try {
            const { id } = req.params;
            const user = await GroupService.deleteGroup(id);
            res.status(200).json(user);
        } catch (e) {
            return res.status(400).json({ status: 400, message: e.message });
        }
    }
};

