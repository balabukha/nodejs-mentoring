import models from '../loaders/models';
import sequelize from '../loaders/db';
import uuidv4 from 'uuid/v4';

export default {
    async addUsersToGroup(groupid, userIds) {
        let results = [];
        const t = await sequelize.transaction();
        try {
            const group = await models.Group.findAll({
                where: {
                    id: groupid
                }
            });
            if (!group) {
                return Promise.reject('group doesn\'t exist');
            }
            for (const userid of userIds) {
                const user = await models.Users.findAll({
                    where: {
                        id: userid
                    }
                });
                if (!user) {
                    return Promise.reject('user doesn\'t exist');
                }

                const UUID  = uuidv4();
                const res = await models.UserGroup.create({ id: UUID, groupid, userid }, { transaction: t });
                results = [...results, res];
            }
            await t.commit();
            return results;
        } catch (e) {
            await t.rollback();
            throw new Error(e);
        }
    }
};
