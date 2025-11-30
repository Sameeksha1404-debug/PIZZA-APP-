const express = require('express');


const {createUser} = require('../controllers/userController');


//router are used for segragating the routes in different folders

const userRouter = express.Router();


//routes will map the routers to the controllers functions
userRouter.post('/create', createUser);//

module.exports = userRouter;