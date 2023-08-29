const mongoose = require("mongoose"); // Import the mongoose library for MongoDB
const bcrypt = require("bcrypt"); // Import the bcrypt library for password hashing
const validator = require("validator"); // Import the validator library for data validation

const Schema = mongoose.Schema; // Create a shorthand reference to the mongoose Schema class

// Define the structure and properties of the User schema
const userSchema = new Schema({
  username: {
    type: String,
    required: true, // This field is required and must be a String
    unique: true, // Each username must be unique
  },
  email: {
    type: String,
    required: true, // This field is required and must be a String
    unique: true, // Each email must be unique
  },
  password: {
    type: String,
    required: true, // This field is required and must be a String
  },
  confPassword: {
    type: String, // This field is optional and must be a String
  },
  status: {
    type: String,
    required: true, // This field is required and must be a String
    default: "inactive", // The default value for the status field is "inactive"
  },
});

// Define a static method named 'signup' on the userSchema
userSchema.statics.signup = async function (username, email, password) {
  if (!username || !email || !password) {
    throw Error("All fields must be filled");
  }
  // ... existing validation checks ...

  // Check if the provided username is already in use
  const usernameExists = await this.findOne({ username });

  if (usernameExists) {
    throw Error("Username already in use");
  }

  // Check if the provided email is already in use
  const emailExists = await this.findOne({ email });

  if (emailExists) {
    throw Error("Email already in use");
  }

  // Hash the password using bcrypt before storing it
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  // Create a new user document in the database
  const user = await this.create({ username, email, password: hash });

  return user;
};

// Define a static method named 'login' on the userSchema
userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  // Find a user with the provided email
  const user = await this.findOne({ email });

  if (!user) {
    throw Error("Incorrect email");
  }

  // Compare the provided password with the stored hashed password
  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Incorrect password");
  }

  return user;
};

// Create and export the User model using the userSchema
module.exports = mongoose.model("User", userSchema);
