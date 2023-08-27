const express = require('express')

//controller functions
const { signupUser , loginUser,activeUser } = require('../controllers/userControllers')

const router = express.Router()

//login route
router.post('/login', loginUser)

//signup route
router.post('/signup', signupUser)

router.patch('/active/:userId', activeUser)
module.exports = router