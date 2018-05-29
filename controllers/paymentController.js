var model = require('../models/paymentModel');

exports.create = function(req, res) {
  var response = model.create(req.body.payment,req.body.referencenum,req.body.supplier,req.body.paymentdate,req.body.ammount);
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
  var response = model.edit(req.body.id,req.body.payment,req.body.referencenum,req.body.supplier,req.body.paymentdate,req.body.ammount);
  return response;
};

exports.delete = function(req, res) {
  var response = model.delete(req.body.id);
  return response;
};
