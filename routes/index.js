const router = require('express').Router()
const userRouter = require('./userRouter')
const inputRouter = require('./inputRouter')
const videoRouter = require('./VideoRouter.js');


router.get('/', (req, res) => {
    res.render('home')
})
router.get('/home', (req, res) => {
    res.render('homeAfter')
})
router.use('/input', inputRouter)
router.use('/user', userRouter)
router.use('/videos', videoRouter);

module.exports = router
