var express   = require('express'),
    path      = require('path'),
    index     = require('./routes/index'),
    instagram = require('./routes/instagram'),
    app       = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public', {maxAge: 86400000}));

app.use('/', index);
app.use('/instagram', instagram);

module.exports = app;