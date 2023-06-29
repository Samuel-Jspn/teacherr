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
      allowNull: true,
  },
    UpdatedAt: {
      type: DataTypes.DATE, 
      allowNull: true,
  },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
  },
    level: {
      type: DataTypes.STRING,
      allowNull: true,
  },
    subject: {
      type: DataTypes.STRING,
      allowNull: true,
  },
    photo: {
      type: DataTypes.STRING,
      allowNull: true,
  },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
  }
});

module.exports = User;