import { getCookie } from "../../common/util/cookieutil";
import commonConstants from "../../common/constants/commonConstants";

const userName =(userName,actions)=>
{
    if (actions.type == 'SIGNIN_USER')
    {
        return actions.payload;
    }

    if (actions.type == 'SIGNOUT_USER')
    {

        return actions.payload;
    }
     var user=getCookie(commonConstants.USER_COOKIE_KEY);
     return (typeof(user)=='undefined'?"":user.userName);
    
}

export {userName};
