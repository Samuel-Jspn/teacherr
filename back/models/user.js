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
  /*token: {
    type: DataTypes.STRING, // ou tout autre type approprié pour le jeton d'authentification
    allowNull: true, // permettant à la valeur d'être nulle lorsqu'il n'y a pas de jeton
  },*/
});

module.exports = User;