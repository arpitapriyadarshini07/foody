const registrationRouter = require('express').Router();


registrationRouter.post('/registration',(req,res)=>{

    res.send('APi Called')
})


// You can require and use your routes here ;)


module.exports = registrationRouter;