const express = require('express');
const asyncHandler = require('express-async-handler');
const { Rental, User, Image } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');

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


// router.patch('',
// requireAuth,
// asyncHandler( async (req, res, next) => {
//     const rentalData = req.body.rental;
//     console.log(rentalData)
//         try{
//             let dbRental = await Rental.findByPk(rentalData.id);
//             console.log(dbRental);
//             dbRental.status = rentalData.status;
//             await dbRental.save();
//             dbRental = await Rental.findByPk(dbRental.id, {
//                 include: User
//             })
//             res.json({ rental: dbRental });
//         } catch(error) {
//             return next(error)
//         }
//     })
// );

router.put('/:id', 
    requireAuth,
    asyncHandler(async (req, res) => {
        const { id } = req.params;
    await Rental.update(
        req.body,
        { where: { id } }
    );
    const updatedRental = await Rental.findByPk(id);
    return res.json({ updatedRental });
}));

router.delete('/:rentalId',
    requireAuth,
    asyncHandler(async (req, res, next) => {
        const rental = await Rental.findByPk(req.params.rentalId);
        await rental.destroy();
        res.json({ rentalId: req.params.rentalId });
    })
)

module.exports = router;