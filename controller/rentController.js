const Model = require('../models/index');
const Genre = Model.Genre;
const Video = Model.Video;
const { Op } = require("sequelize");

class Rent {
    static checkout(req, res) {
        Video.findAll({ where : { id : {[Op.or]: req.body.videos}}})
            .then((data) => res.render('../views/checkout.ejs', {data}))
            .catch(err => res.send(err))
    }
}

module.exports = Rent