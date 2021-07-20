const express = require('express');
const asyncHandler = require('express-async-handler');
const { Rental, User, Image } = require('../../db/models');

const router = express.Router();


router.get('', asyncHandler(async (req, res) => {
    const rentals = await Rental.findAll();
    res.json(rentals);
}));

router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    const rentalId = parseInt(req.params.id, 10);
    const rental = await Rental.findByPk(rentalId,
        { include: [User, Image] });
}));


router.post('/create', asyncHandler(async (req, res) => {
    const { userId, address, city, state, country, lat, lng, name, description, price } = req.body;
    const rental = await Rental.create({
        userId,
        address,
        city,
        state,
        country,
        lat,
        lng,
        name,
        description,
        price
    });
    return res.json({ rental });
}));

module.exports = router;