import { postApiCall } from "../../common/util/httputil";
import { SERVICE_URL } from "../config/urlConfig";

const onRegistration= async (data) =>
{
    var response={
        error:"",
        data:""
    }
    var registrationData = {

        firstName : data.firstName,
        lastName : data.lastName,
        email: data.emailId,
        mobileNo:data.mobno,
        dialCode:data.dialCode,
        password:data.password,
        language: "en", 
        country: data.country, 
        gender: data.gender
    }
    return postApiCall(SERVICE_URL.registrationURL,registrationData)
}

const onSignIn= async (values) =>
{
   
    var signindata = {
        password:values.password
    }

    var reg = "/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/";

    if(reg.match(values.emailId) ==true){
        signindata['emailId']=values.emailId;
    }else{
        signindata['mobileNo']=values.emailId;
    }
   
    return postApiCall(SERVICE_URL.signinURL,signindata);
}

export {onRegistration,onSignIn};