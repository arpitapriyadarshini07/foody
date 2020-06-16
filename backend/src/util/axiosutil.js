const Axios = require('axios');

module.exports.postCall = (url,body,headers)=>{

  addDefaultHeader(headers);

  return Axios.post(url,body,{

        headers:headers
    });
}



module.exports.getCallWithParam = (url,param,headers)=>{

    addDefaultHeader(headers);

    return Axios.get(url,param,{

        headers:headers
    })
}


module.exports.getCall =  (url,headers)=>{
    
    addDefaultHeader(headers);
    return Axios.get(url,{

        headers:headers
    })
}

module.exports.putCall = (url,body,headers)=>{

    addDefaultHeader(headers);

    return  Axios.put(url,body,{

        headers:headers
    })
}


function addDefaultHeader(headers){

    headers['Content-Type']= 'application/json';
}