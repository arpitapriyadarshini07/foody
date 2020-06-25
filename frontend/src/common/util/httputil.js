import Axios from 'axios';
import CONFIG from '../config/appConfig'




const postApiCall= async (relativeURL,data) =>
{
    console.log(data)
    return new Promise((resolve,reject)=>{
        Axios.post(CONFIG.baseUrl+relativeURL,data).then((value)=>{        
                    
            resolve({data:value.data,code:value.status,isError:false})
     
           }).catch((error)=>{
            try{    
                resolve({errorMessage:error.response.data,code:error.response.status,isError:true})
            }catch(err)
            {  
             resolve({errorMessage:{error:"Failed to fetch Information from server"},code:"503",isError:true})
            }

    });
    })

}

const getApiCall = async (relativeURL) =>
{
    
    return new Promise((resolve,reject)=>{
        Axios.get(CONFIG.baseUrl+relativeURL).then((value)=>{
            resolve({
            data:value.data,code:value.status,isError:false
        })}).catch((error)=>{
            try{    
                resolve({errorMessage:error.response.data,code:error.response.status,isError:true})
            }catch(err)
            {  
                resolve({errorMessage:{error:"Failed to fetch Information from server"},code:"503",isError:true})
            }
        });
    })

}


export {postApiCall,getApiCall};