const DataTypes = require('sequelize');
const sequelize = require('../routes/ConnBDD'); // Assurez-vous d'importer votre configuration Sequelize

const { Sequelize } = require('sequelize');

const User = new Sequelize('Teacherr', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = User;
