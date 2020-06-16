const {postCall} = require('../util/axiosutil');

module.exports.sendEmail = (to,subject,type,message)=>
{
    body = {

        subject: subject,
        from: {"email":process.env.SENDER_EMAIL},
        content: [{type:type,value:message}],
        personalizations: [{to:[{email:to}]}]
    }

   postCall(process.env.SEND_GRID_URL,body,{'Authorization': 'Bearer '+process.env.SEND_GRID_API_KEY}) 
}