const getToken = require('../helpers/getToken')
const getUserByToken = require('../helpers/getUserByToken')
const Count = require('../models/Count')

module.exports = class CountController{
  /* COUNT CREATE */
  static async createCount(req, res){
    const {title, value, type, typeOut, date, timestamp} = req.body


    if(!title) return res.status(422).json({message: "O titulo é obrigatório."})
    if(!value) return res.status(422).json({message: "O valor é obrigatório."})
    if(!type) return res.status(422).json({message: "O tipo é obrigatório."})
    if(type === "saida" && !typeOut) return res.status(422).json({message: "O tipo de saida é obrigatório."})
    if(!date) return res.status(422).json({message: "A data é obrigatória."})
    
    const newCount = {
      title,
      value,
      type,
      typeOut,
      date,
      timestamp,

      UserId:  req.user.id
    }

    try {
      await Count.create(newCount)
      return res.status(201).json({message: 'Adcionado com sucesso.'})
    } catch (error) {
      console.log('Erro ao adicionar nova conta: '+error);
      return res.status(422).json({message: 'Erro ao adicionar nova conta, tente novamente depois.'})
    }    
  }



  /* COUNT FIND */
  static async findCount(req, res){
    const token = getToken(req)
    const user = await getUserByToken(token)

    
    try {
      const counts = await Count.findAll({where: {UserId: user.id}})
      console.log(counts)
      if(counts.length === 0) return res.json(null)
      if(counts) return res.send(counts)
    } catch (error) {
      console.log("Erro ao buscar transações: "+error)
      return res.json({message: "Houve algum erro na busca de transações, tente mais tarde."})
    }
  }


  /* COUNT DELETE */
  static async deleteCount (req, res){
    const {id} = req.params

    const token = getToken(req)
    const user = await getUserByToken(token)

    const thisCount = await Count.findOne({raw: true, where: {id: id}})
    if(!thisCount) return res.status(422).json({message: "Ops, essa transação não existe."})
    if(thisCount.UserId !== user.id) return res.status(422).json({message: "Essa transação não pertece a você."})
    
    
    try {
      Count.destroy({where:{id:id}})
      return res.json({message: "Transção deletada com sucesso."})
    } catch (error) {
      console.log("Erro ao deletar transação: "+error)
      return res.json({message: "Houve algum erro na excluão da transação, tente mais tarde."})
    }
  }
}