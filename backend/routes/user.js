const express = require('express'); // Import the Express library

// Import the necessary controller functions from a relative path
const { signupUser, loginUser, activeUser } = require('../controllers/userControllers');

const router = express.Router(); // Create an instance of an Express Router

// Route to handle user login
router.post('/login', loginUser);

// Route to handle user signup
router.post('/signup', signupUser);

// Route to handle activating a user account
router.patch('/active/:userId', activeUser);

module.exports = router; // Export the router to be used in the main application file
