const router = require('express').Router()
const countController = require('../controllers/CountController')
const verifyToken = require('../helpers/verifyToken')

router.post('/create',verifyToken , countController.createCount)
router.delete('/delete/:id',verifyToken , countController.deleteCount)
router.get('/',verifyToken , countController.findCount)

module.exports = router