const signInRouter = require('express').Router();
const {validateSignin} = require('../../services/signin/signinservice')


signInRouter.post('/signin',(req,res)=>{
    
    try{
            
       validateSignin(req.body)  
       .then((respone)=>{
                res.status(200).send({token:respone.token,name:response.name,message:"Login successful"});
            })
            .catch((err)=>{
                res.status(400).send({error:err.errorMessage});
            });
        }
        catch(err)
        {
            res.status(500).send({error:'Internal server error'});
        }  
}
)




// You can require and use your routes here ;)


module.exports = signInRouter;