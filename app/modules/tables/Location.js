const { DataTypes } = require('sequelize')
const db  = require('./../../../db')


const Location = db.define('location', {
  
  localID: {
    type: DataTypes.BIGINT(8),
    primaryKey: true,
    autoIncrement: true
  },

  name: {
    type: DataTypes.STRING(30),
    allowNull: false,
    unique: true
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
  },

  userID: {
    type: DataTypes.BIGINT(8),
    references: {
      model: 'users',
      key: 'userID'
    }
  }

})

module.exports = Location
