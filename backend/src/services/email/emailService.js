var hogan = require("hogan.js");
var fs = require('fs')

module.exports.getEmailContent=(templateName,data)=>{

    var template = fs.readFileSync('./public/view/emailtemplate/registrationemail.html','utf-8');
    
    var compiletemplate = hogan.compile(template);
    return compiletemplate.render(data);
    
}