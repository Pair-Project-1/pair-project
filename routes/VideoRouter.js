const videoRouter = require('express').Router();
const VideoController = require('../controller/VideoController.js')


videoRouter.get('/', VideoController.showVideo)
videoRouter.post('/', VideoController.searchVideo)
videoRouter.get('/add', VideoController.addVideo)
videoRouter.post('/add', VideoController.insertVideo)
videoRouter.get('/:genreid/bygenre', VideoController.showVideoByGenre)
videoRouter.post('/:genreid/bygenre', VideoController.searchVideoByGenre)



module.exports = videoRouter;
