import * as express from 'express';
import * as bodyParser from 'body-parser';
import cors from 'cors';
import UserRouts from '../users/UserRouts';
import LoginRouts from '../login/LoginRouts';
import auth from './auth.js';
import GroupRouts from '../group/GroupRouts';
import UserGroupRouts from '../userGroup/UserGroupRouts';
import requestLogger from '../middlewares/requestLogger';
import logger from '../logger';

export default async ({ app }) => {
    app.use(express.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cors());
    app.use('*', requestLogger);
    app.use('/login', LoginRouts);
    app.use('/users', auth, UserRouts);
    app.use('/groups', auth, GroupRouts);
    app.use('/user-groups', auth, UserGroupRouts);
    app.use('*', async (req, res) => {
        res.status(404);
        res.end('404');
    });
    app.use((err, req, res, next) => {
        console.error(err.stack);
        logger.warn({
            service: 'app',
            method: req.method,
            query: req.query,
            message: err.stack
        });
        res.status(500).send(`Server error ${err}`);
    });
    return app;
};
