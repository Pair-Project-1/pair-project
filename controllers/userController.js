const {Customer, Video, CustomerVideo} = require('../models')
const {compare} = require('../helper/encryptPass.js')

class UserController{
    static loginForm(req, res){
        const {error} = req.session
        delete req.session.error
        res.render('login', {error})
    }

    static login(req, res){
        const {username, password} = req.body
        Customer.findOne({where: {username, level:'Admin'}})
            .then(data => {
                if(compare(password, data.password)){
                    req.session.isLogin = true
                    res.redirect('/home')
                } else {
                    req.session.error = `invalid username or password`
                    res.redirect('/input/login')
                }
            })
            .catch(err => {
                req.session.error = err.message
                res.redirect('/input/login')
            })
    }

    static logout(req, res){
        delete req.session.isLogin
        res.redirect('/input/login')
    }

    static registerForm(req, res){
        const {error} = req.session
        delete req.session.error
        res.render('register', {error})
    }

    static register(req, res){
        const newUser = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            birth_year: req.body.birth_year,
            level: req.body.level,
            username: req.body.username,
            password: req.body.password
        }

        Customer.create(newUser)
            .then(data => {
                res.redirect('/')
            })
            .catch(err => {
                res.send(err.message)
            })
    }

    static adminPage(req, res){
        Customer.findAll({where: {level:'Customer'}})
            .then(data => {
                res.render('adminpage', {data})
            })
            .catch(err => {
                res.send(err.message)
            })
    }

    static deleteCustomer(req, res){
        let id = req.params.id
        Customer.destroy({where:{id}})
            .then(data => {
                res.redirect('/user/admin/page')
            })
            .catch(err => {
                res.send(err.message)
            })
    }
}

module.exports = UserController