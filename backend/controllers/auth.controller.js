// controllers/auth.controller.js
const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const exist = await User.findOne({ email });
    if (exist) return res.status(400).json({ msg: "User already exists" });

    const hash = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hash });
    await user.save();

    res.status(201).json({ msg: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ msg: "Registration failed", error: err.message });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "Invalid credentials" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ msg: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

    res.json({ msg: "Login successful", token, user: { name: user.name, email: user.email } });
  } catch (err) {
    res.status(500).json({ msg: "Login failed", error: err.message });
  }
};
