const express = require('express');
const protect = require('../middlewares/authmiddleware');
const User = require('../models/User');

const router = express.Router();

router.get('/profile', protect, async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select('-password');
        res.status(200).json({
            user: user,
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Server error" });

    }
})

module.exports = router;