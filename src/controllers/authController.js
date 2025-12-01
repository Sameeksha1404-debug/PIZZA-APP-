const { loginUser: loginService } = require('../services/authService');
const bcrypt = require("bcryptjs");

async function loginUser(req, res) {
    try {
        const loginPayload = req.body;

        // call service
        const response = await loginService(loginPayload);

        return res.status(200).json({
            message: "login successful",
            data: response,
            success: true,
            error: {}
        });

    } catch (error) {
        return res.status(error.status || 500).json({
            message: "login failed",
            data: {},
            success: false,
            error: error
        });
    }
}

module.exports = {
    loginUser
};
