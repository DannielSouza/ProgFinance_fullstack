const User = require('../models/User')
const bcrypt = require('bcrypt')
const createUserToken = require('../helpers/createUserToken')
const getToken = require('../helpers/getToken')
const getUserByToken = require('../helpers/getUserByToken')

module.exports = class UserController{
  /* USER REGISTER */
  static async register(req, res){
    const {name, email, password, confirmpassword} = req.body

    if(!name) return res.status(422).json({message: 'O nome é obrigatório.'})
    if(!email) return res.status(422).json({message: 'O e-mail é obrigatório.'})
    if(!password) return res.status(422).json({message: 'A senha é obrigatório.'})
    if(!confirmpassword) return res.status(422).json({message: 'A confirmação de senha é obrigatório.'})
    if(password !== confirmpassword) return res.status(422).json({message: 'As senhas não são iguais.'})


    //CHECK IF THE USER ALREADY EXIST
    const user = await User.findOne({where: {email:email}})
    if(user) return res.status(422).json({message: 'Esse e-mail já está em uso.'})

    //CREATE PASSWORD
    const salt = await bcrypt.genSalt(10)
    const passwordHash = await bcrypt.hash(password, salt)
    
    const newUserModel = {
      name,
      email,
      password: passwordHash
    }

    try {
      const newUser = await User.create(newUserModel)
      createUserToken(newUser, req, res)
    } catch (error) {
      console.log(error)
      return res.status(422).json({message: 'Houve um erro ao criar o usuário.'})
    }
  }



  
  /* USER LOGIN */
  static async login(req, res){
    const {email, password} = req.body

    if(!email) return res.status(422).json({message: 'O e-mail é obrigatório.'})
    if(!password) return res.status(422).json({message: 'A senha é obrigatório.'})

    //CHECK IF THE USER EXIST
    const user = await User.findOne({where: {email:email}})
    if(!user) return res.status(422).json({message: 'Usuário não encontrado.'})

    //CHECK PASSWORD
    const checkedPassword = await bcrypt.compare(password, user.password)
    if(!checkedPassword) return res.status(422).json({message: 'Senha inválida.'})
   
    createUserToken(user, req, res)
  }


  /* CHECK USER */
  static async checkUser(req, res){
    const token = getToken(req) 
    const user = await getUserByToken(token)
    const sendUser = {
      id: user.id,
      name: user.name,
      email: user.email
    }
    res.send(sendUser)
  }
}