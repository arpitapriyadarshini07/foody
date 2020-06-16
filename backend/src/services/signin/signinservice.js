const {connection} = require('../../connection/mysqlconnection');
const {compareHash} = require('../../util/encrypionutil');
const {generateAuthorizationToken} = require('../../util/jwtutil'); 

async function validateSignin(user)
{

 var sql,queryparam;
  if  (user.emailId)
    {
        sql = 'select user_id,password,user_type,first_name from user_login where email_id=?';
        queryparam = user.emailId;
    }
  else
    {
        sql = 'select user_id,password,user_type,first_name from user_login where mobile_no=?';
        queryparam = user.mobileNo;
    }
    return new Promise((resolve,reject) =>{
     connection.query(sql,[queryparam],function (err, result) {  
        if(err)
        {
          reject({errorMessage:'Internal Server Error'});
        }
        else
        {
            var password
            result.forEach(element => {
               
                password = element.password;
            if (compareHash(user.password,password))
            {
                var jwtToken = generateAuthorizationToken(element.user_id,element.user_type)
                resolve({token:jwtToken,name:element.first_name});
            }
            else
            {
               reject({errorMessage:'Invalid Login Details'});
            }
        });  
        }
            
    });
   });
}






module.exports = {validateSignin};