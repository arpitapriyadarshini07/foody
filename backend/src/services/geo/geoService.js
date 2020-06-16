const {getCall} = require('../../util/axiosutil');


function getGeoLocationbyQuery(geoQuery)
{
    
    return new Promise((resolve,reject) =>{
        console.log(process.env.GEO_HERE_URL+"&q="+geoQuery);
        getCall(process.env.GEO_HERE_URL+"&q="+geoQuery,{}).then((value)=>{
          
            var locations = [];
            value.data.items.forEach(element => {
                locations.push({
                    displayText:element.title,
                    address:element.address,
                    position:element.position
                    
                });
            });
           
            resolve(locations);
    
        }).catch((error)=>{
            reject({errorMessage:"Failed to fetch location details",error:error})
            
        })  
        
    })

};

module.exports = {getGeoLocationbyQuery}

