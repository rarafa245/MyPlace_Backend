const { DataTypes } = require('sequelize')
const { db } = require('../../../config')

const Users = db.define('users', {
  userID : {
    type: DataTypes.BIGINT(8),
    primaryKey: true,
    autoIncrement: true
  },

  user: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },

  password: {
    type: DataTypes.STRING,
    allowNull: false
  },

  createDay: {
    type: DataTypes.DATE,
    allowNull: false
  }
})

module.exports = Users
