const Model = require('../models/index');
const Genre = Model.Genre;
const Video = Model.Video;
const { Op } = require("sequelize");

class VideoController {
    static showVideo(req, res) {
        Video.findAll({include: Genre})
         .then((data) => res.render('../views/VideoHome.ejs', {data}))
         .catch((err) => res.send(err.stack))
    }

    static addVideo(req, res) {
        Genre.findAll({})
            .then((data) => res.render('../views/VideoAdd.ejs', { genre: data }))
            .catch((err) => res.send(err.stack))
    }

    static insertVideo(req, res) {
        Video.create({
            name: req.body.name,
            sinopsis:req.body.sinopsis,
            GenreId: req.body.genre
        })
            .then(() => res.redirect('/videos'))
            .catch((err) => res.send(err.stack))
    }

    
    static showVideoByGenre(req, res) {
        Video.findAll({where: {GenreId: parseInt(req.params.genreid)},include: Genre})
         .then((data) => res.render('../views/VideoGenre.ejs', {data}))
         .catch((err) => res.send(err.stack))
    }

    static searchVideo(req, res) {
        Video.findAll({
            where: { 
                [Op.or]:[
                    {name : {
                        [Op.substring]: req.body.search
                    }},
                    {sinopsis : {
                        [Op.substring]: req.body.search
                    }}
                ]
            },
            include: Genre
        })
         .then((data) => res.render('../views/VideoHome.ejs', {data}))
         .catch((err) => res.send(err.stack))
        // res.send(req.body.search)
    }
    
    static searchVideoByGenre(req, res) {
        Video.findAll({
            where: {
                GenreId: parseInt(req.params.genreid), 
                [Op.or]:[
                    {name : {
                        [Op.substring]: req.body.search
                    }},
                    {sinopsis : {
                        [Op.substring]: req.body.search
                    }}
                ]
            },
            include: Genre
        })
         .then((data) => res.render('../views/VideoGenre.ejs', {data}))
         .catch((err) => res.send(err.stack))
    }
}

module.exports = VideoController