const geoLocationRouter  = require('express').Router();
const {getGeoLocationbyQuery} = require('../../services/geo/geoService');



geoLocationRouter.get('/search',(req,res)=>{
    
    try{
        getGeoLocationbyQuery(req.query.locationtext).then((value)=>{

                res.status(200).send(value);
            }).catch((error)=>{

                res.status(400).send({error:error.errorMessage});
            })


        }
        catch(err)
        {
            res.status(504).send({error:'Internal server error'});
        }  
    }
)

module.exports = geoLocationRouter;
