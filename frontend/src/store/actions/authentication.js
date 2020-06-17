const saveUserName = (signinname)=>{

    return{
        type: 'SIGNIN_USER',
        payload: signinname
    }
}


export {saveUserName};