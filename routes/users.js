import express from "express";
import { registerUser, getUsers } from '../controllers/userController.js';

const router = express.Router();

router.use(express.json());

// Route to get all users
router.get('/api/users', getUsers);

// Route to register a new user
router.post('/api/users', registerUser);


export default router;  // Use ES6 export syntax
