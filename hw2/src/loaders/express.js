import * as express from 'express';
import * as bodyParser from 'body-parser';
import UserRouts from '../users/UserRouts';
import GroupRouts from '../group/GroupRouts';
import UserGroupRouts from '../userGroup/UserGroupRouts';

export default async ({ app }) => {
    app.use(express.json());
    app.use('/users', UserRouts);
    app.use('/groups', GroupRouts);
    app.use('/user-groups', UserGroupRouts);

    app.use(bodyParser.urlencoded({ extended: false }));
    return app;
};
