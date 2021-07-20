const router = require('express').Router();
const sessionRouter = require('./session');
const usersRouter = require('./users');
const rentalsRouter = require('./rentals')

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/rentals', rentalsRouter)

// router.post('/test', function (req, res) {
//     res.json({ requestBody: req.body });
// });

module.exports = router;