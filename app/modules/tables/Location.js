const { DataTypes } = require('sequelize')
const db  = require('./../../../db')


const Location = db.define('location', {
  local_id: {
    type: DataTypes.BIGINT(8),
    primaryKey: true,
    autoIncrement: true
  },

  x : {
    type: DataTypes.FLOAT(11,5),
    allowNull: false
  },

  y: {
    type: DataTypes.FLOAT(11,5),
    allowNull: false
  },

  rating: {
    type: DataTypes.ENUM({
      values: ['1', '2', '3', '4', '5']
    }),
    allowNull: false
  },

  neighborhood: {
    type: DataTypes.STRING,
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
