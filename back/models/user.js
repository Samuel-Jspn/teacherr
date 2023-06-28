const { DataTypes } = require('sequelize');
const sequelize = require('../config/bdd');

const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true, 
  },
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
  },
    prenom: {
      type: DataTypes.STRING,
      allowNull: false,
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
    createdAt: {
      type: DataTypes.DATE, 
      allowNull: false,
  },
    UpdatedAt: {
      type: DataTypes.DATE, 
      allowNull: false,
  },
    status: {
    type: DataTypes.STRING,   
    allowNull: false,
    unique: true,
  },
    description: {
      type: DataTypes.STRING,
  },
    level: {
      type: DataTypes.STRING,
  },
    subject: {
      type: DataTypes.STRING,
  },
    photo: {
      type: DataTypes.STRING,
  },
  /*token: {
    type: DataTypes.STRING, // ou tout autre type approprié pour le jeton d'authentification
    allowNull: true, // permettant à la valeur d'être nulle lorsqu'il n'y a pas de jeton
  },*/
});

module.exports = User;