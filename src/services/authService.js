const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");
 const {JWT_SECRET, JWT_EXPIRES_IN} = require('../config/serverConfig');
const {findUser} = require('./userService');
async function login(authDetails) {
    const email = authDetails.email;
    const plainpassword=authDetails.password;

    //check if their registered user
const user=await findUser({email});

if(!user){
    throw({reason:'User not registered', status:404});  

}
//compare password if user found
const isPasswordValidated= await bcrypt.compare(plainpassword,user.password);
if (!isPasswordValidated){
    throw({reason:'Invalid password', status:401});  
}
// if the password is valid then generate the jwt token
const token= jwt.sign(
    {
        id: user._id,
        email: user.email       
},JWT_SECRET,{
    expiresIn: JWT_EXPIRES_IN
}
);
return {token};
}

module.exports={
    login
};