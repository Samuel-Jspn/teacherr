const { DataTypes } = require('sequelize');
const sequelize = require('../config/bdd');

const User = sequelize.define('User', {
    nom: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    prenom: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
  },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
  },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
  }
});

module.exports = User;