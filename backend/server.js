require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");
const subjectRoutes = require("./routes/subject.js");

//express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/user", userRoutes);
app.use("/api/subjects",subjectRoutes );

//connect to db
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONG_URL)
.then(() =>{
    //listen for requests
    app.listen(process.env.PORT, () => {
        console.log('connected to  db & listening on port' , process.env.PORT);
    })
})
.catch((error) => {
    console.log(error);
})