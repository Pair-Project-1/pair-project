const router = require('express').Router()
const userRouter = require('./userRouter')
const inputRouter = require('./inputRouter')
const videoRouter = require('./VideoRouter.js');
const rentRouter = require('./rent');


router.get('/', (req, res) => {
    res.render('home')
})
router.use('/input', inputRouter)
router.use('/user', userRouter)
router.use('/videos', videoRouter);
router.use('/rent', rentRouter);

module.exports = router
