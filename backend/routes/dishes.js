const express = require('express');
const router = express.Router();
const mongoDB = require('../db');

router.post('/dishes', async (req, res) => {
    try {
        const { foodItems, foodCategory } = await mongoDB();
        console.log(foodItems);
        console.log(foodCategory);
        res.send({ foodItems, foodCategory });
    } catch (error) {
        console.error(error.message);
        res.send("Server Error!");
    }
});

module.exports = router;
