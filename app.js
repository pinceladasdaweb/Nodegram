"use strict";

import express from 'express';
import path from 'path';
import compression from 'compression';
import moment from 'moment';
import index from './routes/index';
import instagram from './routes/instagram';
import config from './config/config';

const app = express();

app.use(compression());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public', {maxAge: 86400000}));

app.use('/', index);
app.use('/instagram', instagram);

app.use((req, res, next) => {
    let err = new Error('404 - Not Found');
    err.status = 404;
    next(err);
});

if (app.get('env') === 'development') {
    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.render('error', {
            config: config,
            moment: moment,
            message: err.message,
            error: err
        });
    });
}

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
        config: config,
        moment: moment,
        message: err.message,
        error: {}
    });
});

export default app;