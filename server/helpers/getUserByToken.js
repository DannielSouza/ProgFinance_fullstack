const jwt = require('jsonwebtoken')
const User = require('../models/User')

const getUserByToken = async (token)=>{
  if(!token) return res.status(401).json({message: 'Acesso negado.'})

  const decoded = jwt.verify(token, "secretfinance")
  const userId = `${decoded.id}`

  const user = await User.findOne({raw: true ,where: {id: userId}})
 
  return user
}

module.exports = getUserByToken