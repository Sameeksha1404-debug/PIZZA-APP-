const { time } = require('framer-motion');
const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
 productName:{
    type: String,           
    required: [true,'PRODUCT NAME IS REQUIRED'],
    minlength: [3,'PRODUCT NAME CANNOT BE LESS THAN 3 CHARACTERS'],
    trim: true,//if the user gives extra space then it will automatically remove it
    maxlength: [100,'PRODUCT NAME CANNOT BE MORE THAN 100 CHARACTERS']
 }, 
    price:{ 
    type: Number,
    required: [true,'PRODUCT PRICE IS REQUIRED'],       
    min: [0,'PRODUCT PRICE CANNOT BE LESS THAN 0']
 },
    description:{                   
    type: String,
    required: [true,'PRODUCT DESCRIPTION IS REQUIRED'],
    minlength: [10,'PRODUCT DESCRIPTION CANNOT BE LESS THAN 10 CHARACTERS'],
    maxlength: [500,'PRODUCT DESCRIPTION CANNOT BE MORE THAN 500 CHARACTERS']   
    },
    category:{
    type: String,
    required: [true,'PRODUCT CATEGORY IS REQUIRED'],    
    trim: true,
    default:'veg',
    enum:['veg','non-veg','drinks','sides'],
    maxlength: [50,'PRODUCT CATEGORY CANNOT BE MORE THAN 50 CHARACTERS']
    },
    productImage:{
     type: String,
    },
    inStock:{
        type: Boolean,
        default: true,
        required: [true,'PRODUCT STOCK STATUS IS REQUIRED'] 
    },timestamps:true   
});

const Product=mongoose.model('Product',productSchema);
//collection name will be products in the db
//collection creation
//product schema