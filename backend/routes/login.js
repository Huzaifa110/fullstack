const express = require('express');
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require('express-validator');
const jwtSecret = "Delicious Chicken Biryani served with Raita and Salad.Delicious Chicken Biryani served with Raita and Salad."

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

router.post("/login", [
    body('email', 'Invalid Email').isEmail(),
    body('password', 'Password must be at least 8 characters long').isLength({ min: 8 })
],
async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: false, errors: "Email not found!" });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(400).json({ success: false, errors: "Incorrect password!" });
        }
        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, jwtSecret);
        return res.json({ success: true, authToken });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, errors: "Server Error" });
    }
});

module.exports = router;
