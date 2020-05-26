var passwordHash = require('password-hash');

module.exports.generateHash=(userpwd)=>
{

    return passwordHash.generate(userpwd);
}


module.exports.compareHash=(userpwd,hashedpwd)=>
{

    return passwordHash.verify(userpwd,hashedpwd);
}

