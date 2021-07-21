const express = require('express');
const asyncHandler = require('express-async-handler');
const { Image } = require('../../db/models');

const router = express.Router();


router.get('', asyncHandler(async (req, res) => {
    const images = await Image.findAll();
    res.json(images);
}));


router.post('', asyncHandler(async (req, res) => {
    const { rentalId, url } = req.body;
    const image = await Image.create({
        rentalId,
        url,
    });
    return res.json({ image });
}));

module.exports = router;