const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
  const locals = {
    title:"NodeJs Blog App",
    description:"Simple blog app using NodeJs, ExpressJs and MongoDb."
  }

  res.render('index',{locals})
})
router.get('/about',(req,res)=>{
  res.render('about')
})


module.exports = router