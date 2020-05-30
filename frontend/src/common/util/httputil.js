import Axios from 'axios';
import CONFIG from '../config/appConfig'


const postApiCall= async (relativeURL,data) =>
{
    var response = await Axios.post(CONFIG.baseUrl+relativeURL,data);
    console.log(response);
    return response;

}

const getApiCall = async (relativeURL) =>
{
    var response = await Axios.get(CONFIG.baseUrl+relativeURL);
    console.log(response);
    return response;

}


export {postApiCall,getApiCall};