const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
 firstName:{
    type: String,
    required: [true,'FIRST NAME IS REQUIRED'],
    minlength: [3,'FIRST NAME CANNOT BE LESS THAN 3 CHARACTERS'],
    lowercase: true,
    trim: true,//if the user gives extra space then it will automatically remove it
    maxlength: [30,'FIRST NAME CANNOT BE MORE THAN 30 CHARACTERS']
 },

lastName:{
    type: String,
    required: [true,'LAST NAME IS REQUIRED'],
    minlength: [3,'LAST NAME CANNOT BE LESS THAN 3 CHARACTERS'],
    lowercase: true,
    trim: true,//if the user gives extra space then it will automatically remove it
    maxlength: [30,'LAST NAME CANNOT BE MORE THAN 30 CHARACTERS']
 },
mobileNumber:{
    type: String,
    required: [true,'MOBILE NUMBER IS REQUIRED'],
    minlength: [10,'MOBILE NUMBER CANNOT BE LESS THAN 10 CHARACTERS'],
    maxlength: [10,'MOBILE NUMBER CANNOT BE MORE THAN 10 CHARACTERS'],
    unique:[true,'MOBILE NUMBER MUST BE UNIQUE'],
    required:[true,'MOBILE NUMBER IS REQUIRED' ]
},

email:{
    type: String,
    required: [true,'EMAIL IS REQUIRED'],
    unique: [true,'EMAIL MUST BE UNIQUE'],
    lowercase: true,
    trim: true,
    
},
password:{
    type:String,
    required:[true,'password is required'],
    minlength:['8','plz increase the password length'],

}
},
{timestamps:true}
);

const User=mongoose.model('User',userSchema);
//collection name will be users in the db
//collection creation
//user schema

module.exports=User;