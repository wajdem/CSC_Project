const express = require('express');

const {
    getSubjects,
    getSubject,
    createSubject,
    deleteSubject,
    updateSubject
} = require('../controllers/subjectController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all subject
router.use(requireAuth)

// GET all subjects
router.get('/', getSubjects)

//GET a single subject
router.get('/:id', getSubject)

// POST a new subject
router.post('/', createSubject)

// DELETE a subject
router.delete('/:id', deleteSubject)

// UPDATE a subject
router.patch('/:id', updateSubject)


module.exports = router