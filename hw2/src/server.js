import express from 'express';
import expressLoader from './loaders';
import { APP_PORT } from './config';

async function startServer() {
    const app = express();

    await expressLoader({ expressApp: app });

    app.listen(APP_PORT, () => {
        console.log(`Server is running on localhost:${APP_PORT}`);
    });
}

startServer();
