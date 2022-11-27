const jwt = require('jsonwebtoken')

const createUserToken = (user, req, res)=>{

  const token = jwt.sign({
    name: user.name,
    id: user.id,
  }, 'secretfinance')

  return res.status(200).json({message: 'Sucesso!', token: token})
}

module.exports = createUserToken