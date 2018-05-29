var model = require('../models/compraModel');

exports.create = function(req, res) {
  var response = model.create(req.body.department,req.body.productname,req.body.orderdate,req.body.deliverydate,req.body.quantity,req.body.unitprice,req.body.totalprice);
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
  var response = model.edit(req.body.id,req.body.department,req.body.productname,req.body.orderdate,req.body.deliverydate,req.body.quantity,req.body.unitprice,req.body.totalprice);
  return response;
};

exports.delete = function(req, res) {
  var response = model.delete(req.body.id);
  return response;
};
