const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

//login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);

    //create a token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

};

//signup user
const signupUser = async (req, res) => {

  const { confPassword, username, email, password } = req.body;
  console.log(confPassword);
  try {
    const user = await User.signup(username, email, password);

    //create a token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//
const activeUser = async (req, res) => {
  try {
    const { userId } = req.params;

    // Find the user by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Change the status to 'active'
    user.status = "active";
    await user.save();

    return res.json({ message: "User status changed to active" });
  } catch (error) {
    return res.status(500).json({ error: "An error occurred1" });
  }
};

module.exports = { signupUser, loginUser, activeUser };
