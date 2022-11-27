const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('financeproject', 'root', 'password',{
  hosst: 'localhost',
  dialect: 'mysql'
})

/* try {
  sequelize.authenticate()
  console.log("Conectado ao banco de dados.")
} catch (error) {
  console.log("Erro ao conectar ao banco de dados: " + error)
} */

module.exports = sequelize