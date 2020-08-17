const { DataTypes } = require('sequelize')
const db  = require('./../../../db')


const Users = db.define('users', {
  
  userID : {
    type: DataTypes.BIGINT(8),
    primaryKey: true,
    autoIncrement: true
  },

  username: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: {
        msg: "Must be a valid email address",
      }
    }
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
