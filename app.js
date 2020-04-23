const express = require('express')

const router = require('./routes/index.js')
const session = require('express-session')
const app = express()
const port = 3000


app.set("view engine", "ejs")

app.use(express.urlencoded({extended:true}))

app.use(session({
    secret: 'pair project',
    resave: false,
    saveUninitialized: false
  }))

app.use(router)

app.listen(port, () => {
    console.log('Listening port', port)
})
