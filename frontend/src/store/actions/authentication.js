import { removeCookie } from "../../common/util/cookieutil";
import commonConstants from "../../common/constants/commonConstants";

const saveUserName = (signinname)=>{

    return{
        type: 'SIGNIN_USER',
        payload: signinname
    }
}

const signOutUser = ()=>{
    removeCookie(commonConstants.USER_COOKIE_KEY);
    return{
        type: 'SIGNOUT_USER',
        payload: ""
    }
}


export {saveUserName,signOutUser};