const {connection} = require('../../connection/mysqlconnection');
const {mongoConnect} = require('../../connection/mongodbconnections');
const {generateHash} = require('../../util/encrypionutil');
const { v4: uuidv4 } = require('uuid');
const {sendEmail} = require('../../util/emailutil');
const {getEmailContent} = require('../email/emailService');
function registerUser(user)
{
    mongoConnect(function savemetadat(db){

        var usermetadata = { language: user.language, country: user.country, gender: user.gender };
      db.collection("registrationMetadata").insertOne(usermetadata, function(err, res) {
        if (err) throw err;
        saveUserLogin(user,res.ops[0]._id);
         var htmlcontent = getEmailContent('registrationtemplate',{name:user.firstName})
        sendEmail(user.email,'Congratullations you are successfully registered to food app','text/html',htmlcontent);
      });
     
    })
    

}


function saveUserLogin(user,propkey)
{
  console.log(user)
  console.log(propkey)
  var hashedpwd = generateHash(user.password);
  userlogin = {
    user_id : uuidv4(),
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