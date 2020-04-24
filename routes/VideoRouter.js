const videoRouter = require('express').Router();
const VideoController = require('../controllers/VideoController.js')



videoRouter.get('/', (req, res, next) => {
    if(req.session.isLogin){
        next()
    } else {
        req.session.error = "not authenticated"
        res.redirect('/input/login')
    } 
}, VideoController.showVideo)
videoRouter.post('/', VideoController.searchVideo)
videoRouter.get('/add', VideoController.addVideo)
videoRouter.post('/add', VideoController.insertVideo)
videoRouter.get('/:genreid/bygenre', VideoController.showVideoByGenre)
videoRouter.post('/:genreid/bygenre', VideoController.searchVideoByGenre)



module.exports = videoRouter;
