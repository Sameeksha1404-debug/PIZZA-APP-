const express = require('express');


const {loginUser} = require('../controllers/authController');


//router are used for segragating the routes in different folders

const authRouter = express.Router();


//routes will map the routers to the controllers functions
authRouter.post('/login', loginUser);//
module.exports = authRouter;