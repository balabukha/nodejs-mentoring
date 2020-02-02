const { Pool } = require('pg');
import Sequelize from 'sequelize';
import {DATABASE, HOST, PASSWORD, PORT, USER} from "../config";

// Task 3.1
// pgClient
//   .query('CREATE TABLE IF NOT EXISTS users(login VARCHAR (50), password VARCHAR (50), age INT NOT NULL, isdeleted BOOLEAN NOT NULL, created_at TIMESTAMP, updated_at TIMESTAMP );')
//   .catch(err => console.log(err));
//
// to create a user in a native mode
// pgClient
//   .query('INSERT INTO users(login, password, age, isdeleted)VALUES(\'Andrey\', \'12345\', 22, FALSE);')
//   .catch(err => console.log(err));

// Task 3.2
// Configure your REST service to work with PostgreSQL.
// Use the sequelize package(http://docs.sequelizejs.com/) as ORM to work with PostgreSQL.

  const pgClient = new Pool({
    user: USER,
    host: HOST,
    database: DATABASE,
    password: PASSWORD,
    port: PORT,
    ssl: true
  });

  pgClient.on('error', () => console.log('Lost PG connection'));

  const sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
    host: HOST,
    dialect: 'postgres',
    dialectOptions: {
      ssl: true,
    }
  });

  sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });

  const Users = sequelize.define('users', {
    login: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING
    },
    age: {
      type: Sequelize.INTEGER
    },
    isdeleted: {
      type: Sequelize.BOOLEAN
    }
  }, {
    timestamps: false
    // TODO: QA: when creating a table with pb, it creates createdat (no upperCase) but sequelize, tries to find a createdAt
  });

  module.exports = Users
