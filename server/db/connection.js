const {Sequelize} = require('sequelize')

/* Connect your db here */

const sequelize = new Sequelize('financeproject', 'root', 'password',{
  hosst: 'localhost',
  dialect: 'mysql'
})


module.exports = sequelize