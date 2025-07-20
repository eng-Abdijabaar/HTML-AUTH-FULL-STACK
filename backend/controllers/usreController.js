const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fileHandler = require("../utils/fileHandler"); // adjust path if needed

exports.createUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check for invalid image type (set by multer's fileFilter)
        if (req.invalidType) {
            return res.status(400).json({ msg: "Invalid image type" });
        }

        // Check for required fields
        if (!username || !email || !password) {
            return res.status(400).json({ msg: "Some required values are missing" });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ msg: "Email already in use" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Handle the image (if provided)
        let imagePath = '';
        if (req.file) {
            imagePath = fileHandler(req.file); // uses your function
        }

        // Create the new user
        const newUser = await User.create({
            username,
            email,
            image: imagePath,
            password: hashedPassword
        });

        // Return safe response (no password)
        res.status(201).json({
            _id: newUser._id,
            username: newUser.username,
            email: newUser.email,
            image: newUser.image
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Server error" });
    }
};


exports.login = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({ msg: "Some required values are missing" });
        }

        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ msg: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).json({ msg: "Invalid credentials" });
        }

        const payload = {
            _id: user._id,
            username: user.username,
            email: user.email,
            image: user.image
        }

        const token = jwt.sign(payload, process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRATION});
        res.status(200).json({
            token,
            user: payload
        });

    } catch (err) {
        console.error(`error in login: ${err}`);
        res.status(500).json({ msg: "Server error" });
    }
}