const router = require('express').Router()
const userRouter = require('./userRouter')
const inputRouter = require('./inputRouter')


router.get('/', (req, res) => {
    res.render('home')
})
router.use('/input', inputRouter)
router.use('/user', userRouter)

module.exports = router