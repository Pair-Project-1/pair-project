const router = require('express').Router()
const userController = require('../controllers/userController.js')

router.get('/login', userController.loginForm)
router.post('/login', userController.login)
router.get('/register', userController.registerForm)
router.post('/register', userController.register)
router.get('/logout', userController.logout)

module.exports = router