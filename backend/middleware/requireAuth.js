const jwt = require('jsonwebtoken'); // Import the jsonwebtoken library
const User = require('../models/userModel'); // Import the User model from a relative path

// Middleware function to require authentication for protected routes
const requireAuth = async (req, res, next) => {
  // Verify that the user is authenticated
  const { authorization } = req.headers; // Get the 'Authorization' header from the request

  // Check if the 'Authorization' header is missing
  if (!authorization) {
    return res.status(401).json({ error: 'Authorization token required' });
  }

  // Extract the token from the 'Authorization' header (assuming format: "Bearer <token>")
  const token = authorization.split(' ')[1];

  try {
    // Verify the token using the provided SECRET and extract the user's _id
    const { _id } = jwt.verify(token, process.env.SECRET);

    // Find the user by the extracted _id and select only the _id field
    req.user = await User.findOne({ _id }).select('_id');

    // Move on to the next middleware or route handler
    next();
  } catch (error) {
    console.log(error); // Log the error (for debugging purposes)
    // Respond with an error if token verification fails
    res.status(401).json({ error: 'Request is not authorized' });
  }
};

// Export the requireAuth middleware function to be used in other parts of the application
module.exports = requireAuth;
