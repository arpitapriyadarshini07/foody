const {connection} = require('../../connection/mysqlconnection');
const {mongoConnect} = require('../../connection/mongodbconnections');
const {generateHash} = require('../../util/encrypionutil');


function registerUser(user)
{
    mongoConnect(function savemetadat(db){

        var usermetadata = { language: user.language, country: user.country, gender: user.gender };
      db.collection("registrationMetadata").insertOne(usermetadata, function(err, res) {
        if (err) throw err;
        saveUserLogin(user,res.ops[0]._id);
      });
     
    })
    

}


function saveUserLogin(user,propkey)
{
  console.log(user)
  console.log(propkey)
  var hashedpwd = generateHash(user.password);
  userlogin = {

    first_name : user.firstName,
    last_name : user.lastName,
    email_id: user.email,
    mobile_no:user.mobileNo,
    dial_code:user.dialCode,
    password:hashedpwd,
    user_type:'END_USER',
    user_prop_key:propkey

  }

  var sql = 'INSERT INTO user_login SET ?';

    connection.query(sql, userlogin,function (err, result) {  
        if(err)
        {
            console.log("error aasila re" + err);
        }
        else
        {
            console.log("Inserted");
        }
            
    });

}






module.exports = {registerUser};