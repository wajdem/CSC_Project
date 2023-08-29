require("dotenv").config(); // Load environment variables from a .env file if present

const express = require("express"); // Import the Express library
const mongoose = require("mongoose"); // Import the mongoose library for MongoDB
const userRoutes = require("./routes/user"); // Import the user routes module from a relative path
const subjectRoutes = require("./routes/subject.js"); // Import the subject routes module from a relative path

// Create an instance of the Express application
const app = express();

// Apply middleware to parse incoming JSON data
app.use(express.json());

// Middleware for logging requests' path and method to the console
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Attach user routes to a specific base URL
app.use("/api/user", userRoutes);

// Attach subject routes to a specific base URL
app.use("/api/subjects", subjectRoutes);

// Connect to the MongoDB database
mongoose.set("strictQuery", false); // Allow flexible queries
mongoose
  .connect(process.env.MONG_URL) // Connect to the MongoDB server using the URL from the environment variables
  .then(() => {
    // Start listening for incoming requests once the database connection is established
    app.listen(process.env.PORT, () => {
      console.log('Connected to the database & listening on port', process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error); // Log any errors that occur during database connection
  });
