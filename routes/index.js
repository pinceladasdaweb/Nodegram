"use strict";

import express from 'express';
import rp from 'request-promise';
import moment from 'moment';
import config from '../config/config';

const router  = express.Router();
const token   = config.instagram.access_token;
const options = {
    uri: 'https://api.instagram.com/v1/users/self/media/recent/',
    qs: {
        access_token: config.instagram.access_token,
        count: config.instagram.count
    },
    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true
};

router.get('/', (req, res, next) => {
    rp(options)
    .then((json) => {
        res.render('index', {
            config  : config,
            moment  : moment,
            body    : json
        });
    })
    .catch((err) => {
        res.render('index', {
            config  : config,
            moment  : moment,
            body    : err
        });
    });
});

export default router;