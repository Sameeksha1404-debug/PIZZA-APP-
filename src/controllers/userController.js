const { registerUser } = require("../services/userService");
async function createUser(req,res){
    console.log("Create user Controller called");
    console.log(req.body);
// todo:regidter 
try{
const response = await registerUser(req.body);

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