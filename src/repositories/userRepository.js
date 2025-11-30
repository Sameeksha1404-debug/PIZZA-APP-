const User =require('../schema/userSchema');

class UserRepository {


    async findUser(parameters){


// Logic to find a user by mobile number or email in the database
    const response= await User.findOne({...parameters});
    return response;    

    }

    async createUser(userDetails){
        // Logic to create a new user in the database
        const response= await User.create(userDetails);
        return response;
    }
        

    
}
module.exports=UserRepository;
