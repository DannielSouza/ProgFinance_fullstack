const {DataTypes} = require('sequelize')
const connection = require('../db/connection')
const User = require('./User')

const Count = connection.define('count', {
  title:{
    type: DataTypes.STRING,
    required: true
  },
  value:{
    type: DataTypes.STRING,
    required: true
  },
  type:{
    type: DataTypes.STRING,
    required: true
  },
  typeOut:{
    type: DataTypes.STRING,
  },
  date:{
    type: DataTypes.STRING,
    required: true
  },
  timestamp:{
    type: DataTypes.STRING,
    required: true
  },
})

Count.belongsTo(User)

module.exports = Count