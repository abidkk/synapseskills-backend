import User from "../models/userModel.js";  // Capitalized User
// import jwt from ' jsonwebtoken'
import bcrypt from "bcryptjs";
import asyncHandler from "express-async-handler";  // Correct import name



// @desc  Register new user
// @route  POST /api/users
// @ access Public
const registerUser = asyncHandler(async (req, res) => {
    const {
        name, father, email, password, phone, dob, gender, skills, reference,
        reachOut, currentStatus, education, address
    } = req.body;

    // Validate required fields
    if (!name || !email || !password || !father || !phone || !dob || !gender || !education || !address || !currentStatus) {
        res.status(404);
        throw new Error('Please add all required fields');
    }

    // Check if user exists
    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error('User or email already exists');
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        father,
        dob,
        phone,
        gender,
        education,
        address,
        skills,
        reachOut,
        reference,
        currentStatus
    });

    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            // token: generateToken(user._id)
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
});

// @desc  Get all users
// @route  GET /api/users
// @access Public (or Private, depending on your needs)
const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find({});
    res.status(200).json(users);
});

// JWT token generation function
// const generateToken = (id) => {
//     return jwt.sign({ id }, process.env.JWT_SECRET, {
//         expiresIn: '30d',
//     });
// };

export {
    registerUser,
    getUsers,
};
