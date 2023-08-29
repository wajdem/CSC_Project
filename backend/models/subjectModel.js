const mongoose = require('mongoose'); // Import the mongoose library for MongoDB
const Schema = mongoose.Schema; // Create a shorthand reference to the mongoose Schema class

// Define the structure and properties of the Subject schema
const subjectSchema = new Schema({
    username: {
        type: String,
        required: true // This field is required and must be a String
    },
    titelSubject: {
        type: String,
        required: true // This field is required and must be a String
    },
    passingGrade: {
        type: Number,
        required: true // This field is required and must be a Number
    },
    studentsGrade: {
        type: Number,
        required: true // This field is required and must be a Number
    },
    user_id: {
        type: String,
        required: true // This field is required and must be a String
    }
}, { timestamps: true }); // Enable automatic timestamp fields: createdAt and updatedAt

// Create and export the Subject model using the subjectSchema
module.exports = mongoose.model("Subject", subjectSchema);
