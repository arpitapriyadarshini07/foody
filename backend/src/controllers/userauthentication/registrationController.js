const registrationRouter = require('express').Router();
const {registrationValidator} = require('./authvalidator')
const {registerUser} = require('../../services/registration/registrationService');

registrationRouter.post('/registration',async (req,res)=>{

    const userdata = req.body;
    console.log(req.body)
    const error = await registrationValidator(req.body);
    console.log(error);
    if (error)
    {
        res.status(400).send(error);
    }
    else{
        res.send('APi Called');
        registerUser(req.body);
    }

}
)


// You can require and use your routes here ;)


module.exports = registrationRouter;