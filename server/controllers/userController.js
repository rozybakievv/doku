const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const { create } = require('../models/userModel');

// @route GET /api/users/profile
// @access PUBLIC
const getCurrentUser = (req, res) => {
    res.json({
        messsage: 'current user'
    });
}

// @route POST /api/users/
// @access PUBLIC
const registerUser = asyncHandler(async(req, res) => {
    const { username, email, password, firstname, lastname } = req.body;
    
    if(!username || !email || !password || !firstname || !lastname) {
        res.status(400);
        throw new Error('Please fill all fields');
    }

    const userDuplicate = await User.findOne({ email })

    // check if a user with that email exists
    if(userDuplicate) {
        res.status(400);
        throw new Error('Email already used');
    }

    // hash password by genereating a salt then hashing the password
    const salt = await bcrypt.genSalt(10);
    const hashedpwd = await bcrypt.hash(password, salt);

    // create the user with all the fields and the hashed password
    const createUser = await User.create({
        username,
        email,
        password: hashedpwd,
        firstname,
        lastname
    })

    if(createUser) {
        res.status(201).json({
            _id: createUser.id,
            username: createUser.username,
            email: createUser.email
        });
    } else {
        res.status(400);
        throw new Error('Error: user not created');
    }
})

// @route POST /api/users/login
// @access PUBLIC
const authenticateUser = asyncHandler(async(req, res) => {
    res.json({
        messsage: 'login'
    });
})

// @route PUT /api/users/:id
// @access PRIVATE
const modifyUser = asyncHandler(async(req, res) => {
    res.json({
        messsage: 'modify user'
    });
})

// @route DELETE /api/users/:id
// @access PRIVATE
const deleteUser = asyncHandler(async(req, res) => {
    res.json({
        messsage: 'delete user'
    });
})

module.exports = {
    getCurrentUser,
    registerUser,
    authenticateUser,
    modifyUser,
    deleteUser
}