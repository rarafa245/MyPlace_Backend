const { DataTypes } = require('sequelize')
const db  = require('./../../../db')


const Location = db.define('location', {
  
  localID: {
    type: DataTypes.BIGINT(8),
    primaryKey: true,
    autoIncrement: true
  },

  userID: {
    type: DataTypes.BIGINT(8),
    primaryKey: true,
  },

  name: {
    type: DataTypes.STRING(30),
    allowNull: false
  },

  group: {
    type: DataTypes.ENUM({
      values: ['Lazer', 'Restaurante', 'Serviços']
    }),
    allowNull: false
  },

  rating: {
    type: DataTypes.ENUM({
      values: ['1', '2', '3', '4', '5']
    }),
    allowNull: false
  },

  x : {
    type: DataTypes.FLOAT(11,5),
    allowNull: false
  },

  y: {
    type: DataTypes.FLOAT(11,5),
    allowNull: false
  },

  notes: {
    type: DataTypes.TEXT
  }
  
})

module.exports = Location
