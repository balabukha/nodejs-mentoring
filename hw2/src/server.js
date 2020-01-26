const { Pool } = require('pg');
const express = require("express");
import {DATABASE, HOST, PASSWORD, PORT, USER} from "./config";
const app = express();

app.set("port", 3030);

//
// Task 3.1
// Write SQL script which will create Users table in the DB and fillit in with predefined users’collection.
//
const pgClient = new Pool({
  user: USER,
  host: HOST,
  database: DATABASE,
  password: PASSWORD,
  port: PORT,
  ssl: true
});
pgClient.on('error', () => console.log('Lost PG connection'));

pgClient
  .query('CREATE TABLE IF NOT EXISTS users(id SERIAL PRIMARY KEY, login VARCHAR (50), password VARCHAR (50), age INT NOT NULL, isDeleted BOOLEAN NOT NULL);')
  .catch(err => console.log(err));

pgClient
  .query('INSERT INTO users(login, password, age, isDeleted)VALUES(\'Andrey\', \'12345\', 22, FALSE);')
  .catch(err => console.log(err));

app.use(express.json());
app.use("/users", require("./users.js"));

app.listen(app.get("port"), () => {
  console.log(`Server is running on localhost:${app.get("port")}`);
});
