const express = require('express');

const ServerConfig = require('./config/serverConfig');
const connectDB = require('./config/dbConfig');

const app = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.post('/ping', (req, res) => {
    console.log(req.body);
    return res.json({message: "pong"});
})

app.listen(ServerConfig.PORT, async () => {
    await connectDB();
    console.log(`Server started at port ${ServerConfig.PORT}...!!`);
 const newUser=await User.create({
        firstName:"sanjay",
        lastName:"kumar",
        mobileNumber:"9876543210",
        email:"sanjay@example.com",
        password:"password123"          
});
    console.log(newUser);   
    

})