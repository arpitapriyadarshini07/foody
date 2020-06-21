import Cookies from 'universal-cookie';

const cookies = new Cookies();


function getCookie(key)
{
    return cookies.get(key);
}


function setCookie(key,value)
{

    cookies.set(key,value,{path:'/',maxAge:6*60*60})
}

function removeCookie(key)
{

    cookies.remove(key,{path:'/'})
}

export {getCookie,setCookie,removeCookie}