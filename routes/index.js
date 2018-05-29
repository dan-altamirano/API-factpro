var express = require('express');
var db = require('../db');
var router = express.Router();

router.get('/', async function(req, res, next) {
  var response = await db.NOW();
  console.log(response);
  //res.send('Bienvenido - API FactPro v 0.0.1      (' + response[0].now + ')');
  res.send('Bienvenido - API FactPro v 0.0.1');
});
module.exports = router;
