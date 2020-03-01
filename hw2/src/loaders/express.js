import * as express from 'express';
import * as bodyParser from 'body-parser';
import UserRouts from '../users/UserRouts';
import GroupRouts from '../group/GroupRouts';
import UserGroupRouts from '../userGroup/UserGroupRouts';
import requestLogger from '../middlewares/requestLogger';

export default async ({ app }) => {
    app.use(express.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use('*', requestLogger);
    app.use('/users', UserRouts);
    app.use('/groups', GroupRouts);
    app.use('/user-groups', UserGroupRouts);
    app.use('*', async (req, res) => {
        res.status(404);
        res.end('404');
    });
    app.use((err, req, res) => {
        console.error(err.stack);
        res.status(500).send(`Server error ${err}`);
    });
    return app;
};
