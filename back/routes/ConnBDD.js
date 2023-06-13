const express = require('express');
const router = express.Router();

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Teacherr', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

sequelize.authenticate()
  .then(() => {
    console.log('Connected to MySQL');
  })
  .catch((error) => {
    console.error('Connection error:', error);
  });

sequelize.sync()
  .then(() => {
    console.log('Database synced');
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
});

module.exports = router;