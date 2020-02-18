import * as express from 'express';
import * as bodyParser from 'body-parser';
import UserRouts from '../users/UserRouts';

export default async ({ app }) => {
    app.use(express.json());
    app.use('/users', UserRouts);

    app.use(bodyParser.urlencoded({ extended: false }));
    return app;
};
