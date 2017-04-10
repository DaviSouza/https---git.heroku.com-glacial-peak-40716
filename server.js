'use strict';

require('getmodule');

//--var http = require('http');
var port = process.env.PORT || 1337;

var express = require('express');
var path = require('path');
//var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//--var swig = require('swig');
//var index = require('./routes/pessoaRoutes'); //./routes/index

var pessoaRoute  = require('./routes/pessoaRoutes'); 
var usuarioRoute = require('./routes/usuarioRoutes'); 
var enderecoRoute  = require('./routes/enderecoRoutes'); 

var connection = require('express-myconnection');
var mysql = require('mysql');
var app = express();
var cors = require('cors');

app.set('view cache', false);// put true in production

app.use(logger('dev'));
app.use(cors());
app.set('jwtTokenSecret', 'vibevendasehfodapracrlaee');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(
    connection(mysql, {
        host: 'localhost',
        user: 'root',
        password: '1234',
        port: 3306, //port mysql
        database: 'bigali_db'
    }, 'request')
);

//app.use('/', index);
app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.use('/', usuarioRoute);
app.use('/', enderecoRoute);
app.use('/', pessoaRoute);

app.use(function (req, res, next) {
    req.app = app;
    next();
});

if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.json({
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: {}
    });
});

var server = app.listen(port, function () {
    console.log('Listening on port %d', server.address().port);
});

module.exports = app;

