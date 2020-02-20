import express from 'express';
import GroupController from '../group/GroupController';
import expressJoiValidation from 'express-joi-validation';
import { groupQuerySchema } from '../schema/joi';

const validator = expressJoiValidation.createValidator({});
const router = express.Router();

router.get('/', GroupController.getAllGroups); // +
router.get('/:id', GroupController.getGroup); // +

router.post('/', validator.body(groupQuerySchema), GroupController.createGroup); // +

router.put('/:id', validator.body(groupQuerySchema), GroupController.updateGroup); // -

router.delete('/:id', GroupController.deleteGroup); // -

router.all('*', async (req, res) => {
    res.status(404);
    res.end('404');
});

export default router;
