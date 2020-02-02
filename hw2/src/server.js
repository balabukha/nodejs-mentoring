const express = require("express");
import {APP_PORT} from "./config";

async function startServer() {
  const app = express();

  await require('./loaders').default({ expressApp: app });

  app.listen(APP_PORT, () => {
    console.log(`Server is running on localhost:${APP_PORT}`);
  });
}

startServer();
