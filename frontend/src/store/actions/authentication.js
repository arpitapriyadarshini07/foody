const saveUserName = (signinname)=>{

    return{
        type: 'SIGNIN_USER',
        payload: signinname
    }
}

const signOutUser = ()=>{

    return{
        type: 'SIGNOUT_USER',
        payload: ""
    }
}


export {saveUserName,signOutUser};