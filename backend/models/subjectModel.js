const mongoose = require('mongoose')

const Schema = mongoose.Schema

const subjectSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    titelSubject: {
        type: String,
        required: true
    },
    passingGrade: {
        type: Number,
        required: true
    },
    studentsGrade: {
        type: Number,
        required: true
    },
    user_id: {
        type: String,
        required: true
    }

}, { timestamps: true })

module.exports = mongoose.model("Subject", subjectSchema)