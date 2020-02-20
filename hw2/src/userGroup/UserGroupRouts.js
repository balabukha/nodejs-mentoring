import express from 'express';
import UserGroupController from './UserGroupController';

const router = express.Router();

// router.get('/', GroupController.getAllUserGroups); // +
router.post('/:id', UserGroupController.addUsersToGroup); // +

router.all('*', async (req, res) => {
    res.status(404);
    res.end('404');
});

export default router;
