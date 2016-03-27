/*jslint node: true */
"use strict";

var express  = require('express'),
    rp       = require('request-promise'),
    moment   = require('moment'),
    config   = require('../config/config.js'),
    router   = express.Router(),
    username = config.instagram.username,
    token    = config.instagram.access_token,
    options  = {
        uri: 'https://api.instagram.com/v1/users/search',
        qs: {
            q: username,
            access_token: token
        },
        json: true
    };

router.get('/', function (req, res) {
    rp(options)
        .then(function (res) {
            var id = res.data[0].id;

            return rp({
                uri: 'https://api.instagram.com/v1/users/' + id + '/media/recent/?access_token=' + token,
                json: true
            });
        })
        .then(function (json) {
            res.render('index', {
                config  : config,
                moment  : moment,
                body    : json
            });
        })
        .catch(function (err) {
            res.send(err);
        });
});

module.exports = router;