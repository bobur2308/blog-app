require('dotenv').config()
const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const connectDb = require('./server/config/db')
const cookieParser = require('cookie-parser')
const MongoStore = require('connect-mongo')
const session = require('express-session')
const methodOverride = require('method-override')
const {isActiveRoute} = require('./server/helpers/routeHelpers')

const app = express()
app.use(express.static('public'))
app.use('/uploads', express.static('uploads')); 
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())
app.use(methodOverride('_method'))
app.use(session({
  secret:"keyboard cat",
  resave:false,
  saveUninitialized:true,
  store:MongoStore.create({
    mongoUrl:process.env.MONGO_URI
  })
}))

// templating engine
app.use(expressLayouts)
app.set('layout','./layouts/main')
app.set('view engine','ejs')

app.locals.isActiveRoute = isActiveRoute;

app.use('/',require('./server/routes/main'))
app.use('/',require('./server/routes/admin'))

connectDb();
const port = process.env.PORT || 5000
app.listen(port,()=>{
  console.log("App is running on port",port)
})