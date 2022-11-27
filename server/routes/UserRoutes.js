const router = require('express').Router()
const UserController = require('../controllers/UserController')
const verifyToken = require('../helpers/verifyToken')

router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.post('/check', verifyToken, UserController.checkUser)


module.exports = router