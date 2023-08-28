const Subject = require("../models/subjectModel");
const mongoose = require("mongoose");

// get all Subject
const getSubject = async (req, res) => {
  const user_id = req.user.id;

  const subject = await Subject.find({ user_id }.sort({ createAt: -1 }));

  res.status(200).json(subject);
};

// get a single Subject
const getSubjects = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such Subject" });
  }

  const subject = await Subject.findById(id);

  if (!subject) {
    return res.status(404).json({ error: "no such Subject" });
  }

  res.status(200).json(subject);
};

// create new Subject
const createSubject = async (req, res) => {
  const { titelSubject, passingGrade, studentsGrade } = req.body;

  let emptyFields = [];

  if (!titelSubject) {
    emptyFields.push("titelSubject");
  }
  if (!passingGrade) {
    emptyFields.push("passingGrade");
  }
  if (!studentsGrade) {
    emptyFields.push("studentsGrade");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all the fields", emptyFields });
  }

  // add doc to db
  try {
    // const user_id = req.user._id;
    const subject = await Subject.create({
      titelSubject,
      passingGrade,
      studentsGrade,
      // user_id,
    });
    res.status(200).json(subject);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a Subject
const deleteSubject = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Subject" });
  }

  const subject = await Subject.findOneAndDelete({ _id: id });

  if (!subject) {
    return res.status(400).json({ error: "No such subject" });
  }

  res.status(200).json(subject);
};

// update a subject
const updateSubject = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such subject" });
  }

  const subject = await Subject.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!subject) {
    return res.status(400).json({ error: "No such subject" });
  }

  res.status(200).json(subject);
};


module.exports = {
    getSubjects,
    getSubject,
    createSubject,
    deleteSubject,
    updateSubject
  }
