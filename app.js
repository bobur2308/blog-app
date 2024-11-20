require('dotenv').config()

const express = require('express')
const expressLayouts = require('express-ejs-layouts')

const app = express()
const port = process.env.PORT || 5000
app.use(express.static('public'))

// templating engine
app.use(expressLayouts)
app.set('layout','./layouts/main')
app.set('view engine','ejs')

app.use('/',require('./server/routes/main'))
app.listen(port,()=>{
  console.log("App is running on port",port)
})