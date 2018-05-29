var model = require('../models/facturaModel');

exports.create = function(req, res) {
  var response = model.create(req.body.clientname,req.body.street,req.body.community,req.body.state,req.body.zipcode,req.body.rfc,req.body.ordernum,req.body.invoicedate,req.body.concept,req.body.payment,req.body.iva,req.body.totalprice);
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
  var response = model.edit(req.body.id,req.body.clientname,req.body.street,req.body.community,req.body.state,req.body.zipcode,req.body.rfc,req.body.ordernum,req.body.invoicedate,req.body.concept,req.body.payment,req.body.iva,req.body.totalprice);
  return response;
};

exports.delete = function(req, res) {
  var response = model.delete(req.body.id);
  return response;
};
