const express = require('express');
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require('express-validator');

// const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

router.post("/register", [
    body('name', 'Name must be at least 3 characters long').isLength({ min: 3 }),
    body('email', 'Invalid Email').isEmail(),
    body('password', 'Password must be at least 8 characters long').isLength({ min: 8 })
],
async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }    

    const { name, location, email, password } = req.body;

    const salt = await bcrypt.genSalt(10);
    let securedPassword = await bcrypt.hash(req.body.password, salt);

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ errors: [{ msg: 'Email already exists' }] });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        await User.create({
            name,
            location,
            email,
            password: hashedPassword
        });
        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.json({ success: false });
    }
});

module.exports = router;
