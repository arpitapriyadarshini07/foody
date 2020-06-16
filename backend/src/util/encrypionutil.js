var passwordHash = require('password-hash');

module.exports.generateHash=(userpwd)=>
{

    return passwordHash.generate(userpwd);
}


module.exports.compareHash=(userpwd,hashedpwd)=>
{
    const value= passwordHash.verify(userpwd,hashedpwd);
    return value;

}

