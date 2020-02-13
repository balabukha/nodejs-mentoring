import * as express from 'express';
import * as bodyParser from 'body-parser';

export default async ({ app }) => {

  app.use(express.json());
  app.use("/users", require("../users/UserRouts.js"));

  app.use(bodyParser.urlencoded({ extended: false }));
  return app;
};
