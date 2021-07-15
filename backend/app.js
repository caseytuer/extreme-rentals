const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const routes = require('./routes');
const { ValidationError } = require('sequelize');

const { environment } = require('./config');
const isProduction = environment === 'production';

const app = express();

app.use(morgan('dev'));

app.use(cookieParser());
app.use(express.json());

// security middleware, enable cors if in development
if (!isProduction) {
    app.use(cors());
}

// set security related headers
app.use(helmet({
    contentSecurityPolicy: false
}));

// use token for csrf protection
app.use(
    csurf({
        cookie: {
            secure: isProduction,
            sameSite: isProduction && 'Lax',
            httpOnly: true,
        },
    })
);
    
app.use(routes);

// forward unhandled requests to error handler
app.use((_req, _res, next) => {
    const err = new Error("The requested resource couldn't be found.");
    err.title = "Resource Not Found";
    err.errors = ["The requested resource could not be found."];
    err.status = 404;
    next(err);
});

app.use((err, _req, _res, next) => {
    // check if error is Sequelize error
    if (err instanceof ValidationError) {
        err.errors = err.errors.map((e) => e.message);
        err.title = 'Validation error';
    }
    next(err);
});

// error formatter
app.use((err, _req, res, _next) => {
    res.status(err.status || 500);
    console.error(err);
    res.json({
        title: err.title || 'Server Error',
        message: err.message,
        errors: err.errors,
        stack: isProduction ? null : err.stack,
    });
});

module.exports = app;