import Axios from 'axios';
import CONFIG from '../config/appConfig'




const postApiCall= async (relativeURL,data) =>
{
    return new Promise((resolve,reject)=>{
        Axios.post(CONFIG.baseUrl+relativeURL,data).then((value)=>{
            resolve({
            data:value.data,code:value.status,isError:false
        })}).catch((error)=>{
            resolve({errorMessage:error.response.data,code:error.response.status,isError:true})
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
            resolve({errorMessage:error.response.data,code:error.response.status,isError:true})
        });
    })

}


export {postApiCall,getApiCall};