const jwt = require ('jsonwebtoken');

const jwtExpirySeconds = 6000;


module.exports.generateAuthorizationToken =(userid,usertype)=>{

    const token = jwt.sign({ userid:userid,'ROLE':usertype }, process.env.JWT_SECRET_KEY, {
		algorithm: "HS256",
		expiresIn: jwtExpirySeconds,
	})
   return token;
}
