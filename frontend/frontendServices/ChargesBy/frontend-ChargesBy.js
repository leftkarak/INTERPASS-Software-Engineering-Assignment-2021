process.env.NODE_TLS_REJECT_UNAUTHORIZED='0'
const express = require("express");
const axios = require('axios');
const router = express.Router();
var http = require('http');
var fs = require('fs');
var path = require("path");

function funGet(req, res) {
  res.render(path.join(__dirname + '/frontend-ChargesBy.ejs'));
};

function funPost(req, res) {
  var op_1 = req.body.op_1;
  var datef = req.body.datef;
  var datet = req.body.datet;
  var format = req.body.format;

  if (format == "on") {
    res.redirect('https://localhost:9103/interoperability/api/ChargesBy/' + op_1
    + '/'+ datef.replace(/-/g, '') + '/' + datet.replace(/-/g, '') + '?format=csv');

  } else {
    res.redirect('https://localhost:9103/interoperability/api/ChargesBy/' + op_1
    + '/'+ datef.replace(/-/g, '') + '/' + datet.replace(/-/g, ''));

  }
};

router.get('/ChargesBy', funGet)
router.post('/ChargesBy', funPost)
module.exports = router;
