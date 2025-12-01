const { findUser, createUser } = require("../repositories/userRepository");

    async function registerUser(userDetails) {
        // Logic to register a new user
        
    
        // it will create the brand new user in the db

        //1. we need to check if thr user with this email and mobile number already exists or not
     const user =await findUser({
        email: userDetails.email,
        mobileNumber: userDetails.mobileNumber
        });
         

        //2. if not then create the user in the database
        if(user){
            //if user already exists
            throw({reason: 'User with this email or mobile number already exists',status:400});
        }
        // if not then create the user 

        const newUser= await createUser({
            email: userDetails.email,
            firstName: userDetails.firstName,
            lastName: userDetails.lastName,
            mobileNumber: userDetails.mobileNumber,
            password: userDetails.password
        });

       if(!newUser){
        throw({reason:'Error creating user',status:500});
       }
      //3. return the created user details
        return newUser;
    }

module.exports={
    registerUser
};