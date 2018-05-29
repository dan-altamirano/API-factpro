var express = require('express');
var controller = require('../controllers/usuarioController');
var router = express.Router();

router.post('/', function(req, res, next) {
  var response = controller.create(req, res);
  response.then(function(result) {
    res.json(result.rows);
  });
});

router.get('/', function(req, res, next) {
  var response = controller.list(req, res);
  response.then(function(result) {
    res.json(result.rows);
  });
});

router.get('/id/:id', function(req, res, next) {
  var response = controller.viewId(req, res);
  response.then(function(result) {
    res.json(result.rows);
  });
});

router.get('/:username/:password', function(req, res, next) {
  var response = controller.find(req, res);
  response.then(function(result) {
    res.json(result.rows);
  });
});

router.get('/:username', function(req, res, next) {
  var response = controller.view(req, res);
  response.then(function(result) {
    res.json(result.rows);
  });
});

router.put('/', function(req, res, next) {
  var response = controller.edit(req, res);
  response.then(function(result) {
    res.json(result.rows);
  });
});

router.delete('/', function(req, res, next) {
  var response = controller.delete(req, res);
  response.then(function(result) {
    res.json(result.rows);
  });
});

module.exports = router;
