const express = require('express');
const User = require('./schema/userSchema');
const ServerConfig = require('./config/serverConfig');
const connectDB = require('./config/dbConfig');
const userRouter = require('./routes/userRoute');
const cartRouter = require('./routes/cartRoute');

const app = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

//Routing middleware
//if your req route starts with /users then handle it using userRouter.
app.use('/user', userRouter);
app.use('/cart', cartRouter);
app.use('/auth', require('./routes/authRoute'));

app.post('/ping', (req, res) => {
    console.log(req.body);
    return res.json({message: "pong"});
})

app.listen(ServerConfig.PORT, async () => {
    await connectDB();
    console.log(`Server started at port ${ServerConfig.PORT}...!!`);
//  const newUser=await User.create({
//         firstName:"sanjay",
//         lastName:"kumar",
//         mobileNumber:"9876543210",
//         email:"sanjay@example.com",
//         password:"password123"          
// });
//     console.log(newUser);   


})

// localhost:3000/users
// localhost:3000/cart