const express = require('express');
const asyncHandler = require('express-async-handler');
const { Review, User, Rental } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');

const router = express.Router();


router.get('', asyncHandler(async(req, res) => {
    const reviews = await Review.findAll();
    res.json(reviews);
}))

router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    const reviewId = parseInt(req.params.id, 10);
    const review = await Review.findByPk(reviewId, 
        { include: [User]});
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

router.put('/:id',
    requireAuth,
    asyncHandler(async(req, res) => {
        const { id } = req.params;
        await Review.update(
            req.body,
            { where: { id } }
        );
        const updatedReview = await Review.findByPk(id);
        return res.json({ updatedReview });
}));

router.delete('/:id',
    requireAuth,
    asyncHandler(async (req, res, next) => {
        const review = await Review.findByPk(req.params.id);
        await review.destroy();
        res.json({ reviewId: req.params.id });
    })
)

module.exports = router;