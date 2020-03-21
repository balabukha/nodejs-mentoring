import GroupController from '../group/GroupController';
import GroupDAL from '../group/GroupDAL';

const res = {
    end() {},
    status(s) {
        this.statusCode = s;
        return this;
    },
    send() { },
    json(err) {
        console.log(`\n : ${  err}`);
    }
};

describe('Test suits to group route', () => {
    it('Should CREATE a new GROUP', async () => {
        const req = {
            body: {
                name: 'Group_one',
                permission: 'WRITE'
            }
        };
        const spy = jest.spyOn(GroupDAL, 'createGroup').mockImplementation(() => req.body);

        await GroupController.createGroup(req, res);
        expect(spy).toHaveBeenCalledTimes(1);
    });

    it('Should DELETE a GROUP, using an ID', async () => {
        const spy = jest.spyOn(GroupDAL, 'deleteGroup').mockImplementation(() => '12345');

        await GroupController.deleteGroup({ params: { id: '12345' } }, res);
        expect(spy).toHaveBeenCalledTimes(1);
    });

    it('Should GET a GROUP, using an ID', async () => {
        const spy = jest.spyOn(GroupDAL, 'getGroup').mockImplementation(() => '12345');

        await GroupController.getGroup({ params: { id: '12345' } }, res);
        expect(spy).toHaveBeenCalledTimes(1);
    });

    it('Should UPDATE a user, using an ID and new values, by calling to DB', async () => {
        const req = {
            params: {
                id: '12345'
            },
            body: {
                name: 'Group_teo',
                permission: 'READ'
            }
        };
        const spy = jest.spyOn(GroupDAL, 'updateGroup').mockImplementation(() => req.body);

        await GroupController.updateGroup(req, res);

        expect(spy).toHaveBeenCalledTimes(1);
    });
});
