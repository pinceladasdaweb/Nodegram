/*jslint node: true */
"use strict";

var express = require('express'),
    request = require('request'),
    config  = require('../config/config.js'),
    router  = express.Router(),
    token   = config.instagram.access_token;

router.get('/', function (req, res) {
    request({
        url: 'https://api.instagram.com/v1/users/self/media/recent?access_token=' + token,
        json: true,
        timeout: 10000
    }, function (error, response, body) {
        res.send(body);
    });
});

module.exports = router;