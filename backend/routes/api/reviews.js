const express = require('express');
const asyncHandler = require('express-async-handler');
const { Reviews, User, Rental } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');

const router = express.Router();



router.get('', asyncHandler(async(req, res) => {
    const currentRentalId = parseInt(req.params.id, 10);
    const reviews = await Review.findAll({ where: currentRentalId === rentalId})
    res.json(reviews)
}))

router.post('/create', asyncHandler(async(req, res) => {
    const { userId, rentalId, review } = req.body;
    const review = await Review.create({
        userId,
        rentalId,
        review
    });
    return res.json({ review });
}));