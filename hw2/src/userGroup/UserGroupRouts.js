import express from 'express';
import UserGroupController from './UserGroupController';

const router = express.Router();

// router.get('/', GroupController.getAllUserGroups); // +
router.post('/:id', UserGroupController.addUsersToGroup); // +

export default router;
