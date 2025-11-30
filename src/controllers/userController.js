const {model}= require("mongoose");
const UserService = require("../services/userService");
const UserRepository = require("../repositories/userRepository");

async function createUser(req,res){
    console.log("Create user Controller called");
    console.log(req.body);
// todo:regidter the user

const userService = new UserService(new UserRepository());

try{
const response = await userService.registerUser(req.body);

    return res.json({
    message:"user registered successfully",
    data: response,
    success:true,
    error:{}
  });
}catch(error){
    return res.json({
        message:"user registration failed",
        data:{},
        success:false,
        error:error
      });
    }




}

module.exports={
    createUser
}