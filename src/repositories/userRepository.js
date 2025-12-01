const User =require('../schema/userSchema');

 async function findUser(parameters){

try{
// Logic to find a user by mobile number or email in the database
    const response= await User.findOne({...parameters});
    return response;    
 }catch(error){
        console.log("Error in finding user in repository",error);           
    }
}

async function createUser(userDetails){
        try{
// Logic to create a new user in the database
        const response= await User.create(userDetails);
        return response;
    }catch(error){
        console.log("Error in creating user in repository",error);
        }
        
    }
module.exports={
    findUser, 
    createUser};
    