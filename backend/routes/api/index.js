const router = require('express').Router();
const sessionRouter = require('./session');
const usersRouter = require('./users');
const rentalsRouter = require('./rentals');
const imagesRouter = require('./images');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/rentals', rentalsRouter);
router.use('/images', imagesRouter);

// router.post('/test', function (req, res) {
//     res.json({ requestBody: req.body });
// });

module.exports = router;