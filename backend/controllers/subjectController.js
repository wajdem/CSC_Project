// Import required dependencies and modules
const { response } = require("express"); // Import the response object from the Express library
const Subject = require("../models/subjectModel"); // Import the Subject model from a relative path
const mongoose = require("mongoose"); // Import the mongoose library for working with MongoDB

// Function to get all subjects associated with a user
const getSubjects = async (req, res) => {
  const user_id = req.user.id; // Get the user's ID from the request object

  // Find all subjects belonging to the user
  const subject = await Subject.find({ user_id });
  console.log(subject); // Output the retrieved subjects to the console
  res.status(200).json(subject); // Respond with the retrieved subjects as JSON
};

// Function to get a single subject by its ID
const getSubject = async (req, res) => {
  const { id } = req.params; // Get the subject's ID from the request parameters

  // Check if the provided ID is a valid MongoDB ObjectID
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such subject" });
  }

  // Find the subject with the provided ID
  const subject = await Subject.findById(id);

  // If no subject is found, respond with an error message
  if (!subject) {
    return res.status(404).json({ error: "No such subject" });
  }

  // Respond with the retrieved subject as JSON
  res.status(200).json(subject);
};

// Function to create a new subject
const createSubject = async (req, res) => {
  const { username, titelSubject, passingGrade, studentsGrade } = req.body; // Destructure fields from the request body

  // Check for missing fields
  let emptyFields = [];
  if (!username) {
    emptyFields.push("username");
  }
  // ... Similar checks for other fields

  // If there are missing fields, respond with an error message
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all the fields", emptyFields });
  }

  // Create a new subject in the database with the provided data
  try {
    const user_id = req.user._id; // Get the user's ID from the request object
    const subject = await Subject.create({
      username,
      titelSubject,
      passingGrade,
      studentsGrade,
      user_id,
    });
    res.status(200).json(subject); // Respond with the created subject as JSON
  } catch (error) {
    res.status(400).json({ error: error.message }); // If an error occurs, respond with an error message
  }
};

// Function to delete a subject by its ID
const deleteSubject = async (req, res) => {
  const { id } = req.params; // Get the subject's ID from the request parameters

  // Check if the provided ID is a valid MongoDB ObjectID
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such subject" });
  }

  // Find and delete the subject with the provided ID
  const subject = await Subject.findOneAndDelete({ _id: id });

  // If no subject is found, respond with an error message
  if (!subject) {
    return res.status(400).json({ error: "No such subject" });
  }

  // Respond with the deleted subject as JSON
  res.status(200).json(subject);
};

// Function to update a subject by its ID
const updateSubject = async (req, res) => {
  const { id } = req.params; // Get the subject's ID from the request parameters

  // Check if the provided ID is a valid MongoDB ObjectID
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such subject" });
  }

  // Find and update the subject with the provided ID using the data in the request body
  const subject = await Subject.findOneAndUpdate(
    { _id: id },
    {
      ...req.body, // Update subject fields with data from the request body
    }
  );

  // If no subject is found, respond with an error message
  if (!subject) {
    return res.status(400).json({ error: "No such subject" });
  }

  // Respond with the updated subject as JSON
  res.status(200).json(subject);
};

// Export all the defined functions to be used in other parts of the application
module.exports = {
  getSubjects,
  getSubject,
  createSubject,
  deleteSubject,
  updateSubject,
};
