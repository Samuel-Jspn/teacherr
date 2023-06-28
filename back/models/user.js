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
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
  }
});

module.exports = User;