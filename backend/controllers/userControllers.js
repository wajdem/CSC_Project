const User = require("../models/userModel"); // Import the User model from a relative path
const jwt = require("jsonwebtoken"); // Import the jsonwebtoken library

// Function to create a JSON Web Token (JWT) for a user
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

// Function to handle user login
const loginUser = async (req, res) => {
  const { email, password } = req.body; // Extract email and password from the request body

  try {
    // Attempt to log in the user using the User model's login method
    const user = await User.login(email, password);

    // Create a JWT token for the logged-in user
    const token = createToken(user._id);

    // Respond with the user's email and the generated token
    res.status(200).json({ email, token });
  } catch (error) {
    // If an error occurs during login, respond with an error message
    res.status(400).json({ error: error.message });
  }
};

// Function to handle user signup
const signupUser = async (req, res) => {
  const { confPassword, username, email, password } = req.body; // Extract signup data from the request body
  console.log(confPassword); // Log the confirmed password (this can be removed later)

  try {
    // Attempt to sign up the user using the User model's signup method
    const user = await User.signup(username, email, password);

    // Create a JWT token for the signed-up user
    const token = createToken(user._id);

    // Respond with the user's email and the generated token
    res.status(200).json({ email, token });
  } catch (error) {
    // If an error occurs during signup, respond with an error message
    res.status(400).json({ error: error.message });
  }
};

// Function to activate a user account
const activeUser = async (req, res) => {
  try {
    const { userId } = req.params; // Get the userId from the request parameters

    // Find the user by ID using the User model
    const user = await User.findById(userId);

    // If no user is found, respond with an error message
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Change the user's status to 'active' and save the changes
    user.status = "active";
    await user.save();

    // Respond with a success message
    return res.json({ message: "User status changed to active" });
  } catch (error) {
    // If an error occurs during the activation process, respond with an error message
    return res.status(500).json({ error: "An error occurred" });
  }
};

// Export the defined functions to be used in other parts of the application
module.exports = { signupUser, loginUser, activeUser };
