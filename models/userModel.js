import mongoose from 'mongoose';

// Define the nested education schema
const educationSchema = new mongoose.Schema({
    qualification: {
        type: String,
        required: true,
    },
    instituteName: {
        type: String,
        required: true,
    },
    semester: {
        type: Number,
        required: true,
    },
    department: {
        type: String,
        required: true,
    }
});

// Define the nested address schema
const addressSchema = new mongoose.Schema({
    city: {
        type: String,
        required: true,
    },
    town: {
        type: String,
        required: true,
    },
});

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add your name']
    },
    father: {
        type: String,
        required: [true, 'Please add your father name']
    },
    dob: {
        type: Date,
        required: [true, 'Please add your date of birth'],
    },
    gender: {
        type: String,
        required: [true, 'Please add your gender']
    },
    phone: {
        type: String,
        required: [true, 'Please add your phone number']
    },
    email: {
        type: String,
        required: [true, 'Please add your email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please create a strong password'],
        minlength: 8,  // Ensures the password is at least 8 characters long
    },
    skills: {
        type: [String],  // Array of strings to store multiple skills
        default: [],
        required: false,
    },
    reference: {
        type: String,
        required: false
    },
    reachOut: {
        type: String,
        required: false
    },
    currentStatus: {  // Fixed the typo
        type: String,
        required: true
    },
    education: [educationSchema],
    address: [addressSchema],
}, {
    timestamps: true  // Automatically add createdAt and updatedAt fields
});

// module.exports = mongoose.model('User', userSchema);
export default mongoose.model('User', userSchema);
