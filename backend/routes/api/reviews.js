const express = require('express');
const asyncHandler = require('express-async-handler');
const { Review, User, Rental } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');

const router = express.Router();



router.get('', asyncHandler(async(req, res) => {
    const reviews = await Review.findAll();
    res.json(reviews);
}))

router.post('/create', asyncHandler(async(req, res) => {
    const { userId, rentalId, reviewBody } = req.body;
    const review = await Review.create({
        userId,
        rentalId,
        reviewBody
    });
    return res.json({ review });
}));

module.exports = router;