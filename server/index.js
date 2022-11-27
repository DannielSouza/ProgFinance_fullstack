//EXPORTS
  const cors = require('cors')
  const express = require('express')
  const app = express()
  const connection = require('./db/connection')
  const UserRoutes = require('./routes/UserRoutes')
  const CountRoutes = require('./routes/CountRoutes')

//EXPRESS
  app.use(express.urlencoded({extended: true}))
//CORS
 app.use(cors())
 app.use(express.json())
//ROUTES
app.use('/user', UserRoutes)
app.use('/count', CountRoutes)


connection.sync(/* {force:true} */)
.then(()=> {
  app.listen(4000)
  console.log("Servidor ligado na porta 4000")
}).catch(error=> {
   console.log("Erro ao ligar o servidor: " + error)
})