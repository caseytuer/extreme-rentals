const express = require('express');
const router = express.Router();
const apiRouter = require('./api');

router.use('/api/', apiRouter);

if (process.env.NODE_ENV === 'production') {
    const path = require('path');
    // serve the frontend's index.html at root route
    router.get('/', (req, res) => {
        res.cookie('XSRF-TOKEN', req.csrfToken());
        return res.sendFile(
            path.resolve(__dirname, '../../frontend', 'build', 'index.html')
        );
    });

    // serve static assets in frontend build folder
    router.use(express.static(path.resolve("../frontend/build")));

    // serve frontend index.html at all routes NOT starting with /api
    router.get(/^(?!\/?api).*/, (req, res) => {
        res.cookie('XSRF-TOKEN', req.csrfToken());
        return res.sendFile(
            path.resolve(__dirname, '../../frontend', 'build', 'index.html')
        );
    });
}

// add XSRF-TOKEN cookie in development
if (process.env.NODE_ENV !== 'production') {
    router.get('/api/csrf/restore', (req, res) => {
        res.cookie('XSRF-TOKEN', req.csrfToken());
        return res.json({});
    });
}

module.exports = router;