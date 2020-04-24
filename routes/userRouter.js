const router = require('express').Router()
const userController = require('../controllers/userController.js')

router.get('/admin/page', userController.adminPage)
router.get('/admin/delete/:id', userController.deleteCustomer)

module.exports = router