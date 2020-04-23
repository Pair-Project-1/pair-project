const routes = require('express').Router();
const videoRouter = require('./VideoRouter.js');


routes.get('/', (req, res) => res.send('awalan'));
routes.use('/videos', videoRouter);


module.exports = routes
