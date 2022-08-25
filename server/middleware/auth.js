const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

const protect = asyncHandler(async (req, res, next) =>{
    let token;

    // check if there is an authorization header and if it starts with bearer so we can get the token sent in there
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // getting the token from bearer, appears as -> Bearer token <- so we split it by spaces and take index 1 which is the token
            token = req.headers.authorization.split(' ')[1];
            
            // decoded token with secret since we signed the id with the secret
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            
            req.user = await User.findById(decoded.id).select('-password');

            next()
        } catch (error) {
            res.status(401);
            throw new Error('Not authorized')
        }
    }
})

module.exports = { protect }