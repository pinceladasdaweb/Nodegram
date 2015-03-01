/*jslint node: true */
"use strict";

var express = require('express'),
    request = require('request'),
    moment  = require('moment'),
    config  = require('../config/config.js'),
    router  = express.Router(),
    user    = config.instagram.access_token.split('.')[0],
    token   = config.instagram.access_token;

router.get('/', function (req, res) {
    request({
        url: 'https://api.instagram.com/v1/users/' + user + '/media/recent?access_token=' + token,
        json: true,
        timeout: 10000
    }, function (error, response, body) {
        res.render('index', {
            config  : config,
            moment  : moment,
            data    : body
        });
    });
});

module.exports = router;