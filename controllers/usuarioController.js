var model = require('../models/usuarioModel');

exports.create = function(req, res) {
  var response = model.create(req.body.name,req.body.birthdate,req.body.email,req.body.username,req.body.password);
  return response;
};

exports.find = function(req, res) {
  var response = model.find(req.params.username,req.params.password);
  return response;
};

exports.list = function(req, res) {
  var response = model.list();
  return response;
};

exports.view = function(req, res) {
  var response = model.view(req.params.username);
  return response;
};

exports.viewId = function(req, res) {
  var response = model.viewId(req.params.id);
  return response;
};


exports.edit = function(req, res) {
  var response = model.edit(req.body.id,req.body.name,req.body.birthdate,req.body.email,req.body.username,req.body.password);
  return response;
};

exports.delete = function(req, res) {
  var response = model.delete(req.body.id);
  return response;
};
