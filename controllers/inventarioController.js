var model = require('../models/inventarioModel');

exports.create = function(req, res) {
  var response = model.create(req.body.sku,req.body.description,req.body.dateinventory,req.body.status,req.body.balance);
  return response;
};

exports.list = function(req, res) {
  var response = model.list();
  return response;
};

exports.view = function(req, res) {
  var response = model.view(req.params.id);
  return response;
};

exports.edit = function(req, res) {
  var response = model.edit(req.body.id,req.body.sku,req.body.description,req.body.dateinventory,req.body.status,req.body.balance);
  return response;
};

exports.delete = function(req, res) {
  var response = model.delete(req.body.id);
  return response;
};
