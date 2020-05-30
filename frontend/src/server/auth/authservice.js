import { postApiCall } from "../../common/util/httputil";
import { SERVICE_URL } from "../config/urlConfig";

const onRegistration= (data) =>
{
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
    console.log('Apimcalled');
    var res=postApiCall(SERVICE_URL.registrationURL,registrationData)
    console.log(res);
}

export {onRegistration};