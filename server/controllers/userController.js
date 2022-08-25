const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

// Generate JWT function
const generateJwt = (id) => {
    // sign a new token with the id and the secret, expires in 30 days
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    });
}

// @route GET /api/users/profile
// @access PRIVATE
const getCurrentUser = asyncHandler(async(req, res) => {
    // req.user will be whatever user is authenticated since the routes passes by the function protect and sets req.user to the current user id
    const { _id, email, username, firstname, lastname } = await User.findById(req.user.id);
    
    res.status(200).json({
        id: _id,
        email: email,
        username: username,
        firstname: firstname,
        lastname: lastname
    })
})

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
        throw new Error('A user already exists with this email');
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

    // create user
    if(createUser) {
        res.status(201).json({
            _id: createUser.id,
            username: createUser.username,
            email: createUser.email,
            token: generateJwt(user._id)
        });
    } else {
        res.status(400);
        throw new Error('Error: user not created');
    }
})

// @route POST /api/users/login
// @access PUBLIC
const authenticateUser = asyncHandler(async(req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    // check if user exists and if the hashed password compares with bcrypt, then send a jwt
    if(user && (await bcrypt.compare(password, user.password))) {
        res.status(201).json({ token: generateJwt(user._id) });
    } else {
        res.status(400);
        throw new Error('Invalid credentials');
    }
})

// @route PUT /api/users/:id
// @access PRIVATE
const modifyUser = asyncHandler(async(req, res) => {
    const findUserId = await User.findById(req.params.id);

    if(!findUserId) {
        res.status(400);
        throw new Error('User not found');
    }

    const updateUser = await User.findByIdAndUpdate(req.params.id, req.body);

    res.json(updateUser);
})

// @route DELETE /api/users/:id
// @access PRIVATE
const deleteUser = asyncHandler(async(req, res) => {
    const findUserId = await User.findById(req.params.id);

    if(!findUserId) {
        res.status(400);
        throw new Error('User not found');
    }

    await User.findByIdAndDelete(req.params.id);

    res.json(`User ${findUserId.username} was deleted`);
})

module.exports = {
    getCurrentUser,
    registerUser,
    authenticateUser,
    modifyUser,
    deleteUser
}