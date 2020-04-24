require('dotenv').config()

const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})

let mailOption = {
    from: '',
    to: '',
    subject: '',
    text: ""
}

// transporter.sendMail(mailOption, (err, data) => {
//     if(err){
//         console.log('Error Occurs', err)
//     } else {
//         console.log('Email sent!!!')
//     }
// })

module.exports = {transporter, nodemailer}