
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

    return "";
}

export {userName};
