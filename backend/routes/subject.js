const express = require("express"); // Import the Express library

// Import the necessary controller functions from a relative path
const {
  getSubjects,
  getSubject,
  createSubject,
  deleteSubject,
  updateSubject,
} = require("../controllers/subjectController");

// Import the requireAuth middleware function for route authentication
const requireAuth = require("../middleware/requireAuth");

const router = express.Router(); // Create an instance of an Express Router

// Apply the requireAuth middleware to all routes under this router
router.use(requireAuth);

// Route to handle getting all subjects
router.get("/", getSubjects);

// Route to handle getting a single subject by ID
router.get("/:id", getSubject);

// Route to handle creating a new subject
router.post("/", createSubject);

// Route to handle deleting a subject by ID
router.delete("/:id", deleteSubject);

// Route to handle updating a subject by ID
router.patch("/:id", updateSubject);

module.exports = router; // Export the router to be used in the main application file
