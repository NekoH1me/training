'use strict';

var express = require('express');
var weather_tokyo = require("./weather_tokyo.json");
var weather_dubai = require("./weather_dubai.json");
var weather_vladivostok = require("./weather_vladivostok.json");

var app = express();

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  next();
});

app.get('/dubai', function (req, res) {
  res.json(weather_dubai);
});

app.get('/tokyo', function (req, res) {
    res.json(weather_tokyo);
});

app.get('/vladivostok', function (req, res) {
    res.json(weather_vladivostok);
});

app.listen(3000, function () {
  console.log('App listening on port 3000!');
});