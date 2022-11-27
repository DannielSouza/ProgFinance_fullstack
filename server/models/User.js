const { DataTypes } = require("sequelize")
const connection = require('../db/connection')

const User = connection.define('User',{
  name:{
    type: DataTypes.STRING,
    required: true
  },
  email:{
    type: DataTypes.STRING,
    required: true
  },
  password:{
    type: DataTypes.STRING,
    required: true
  },
})

module.exports = User