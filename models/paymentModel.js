var db = require('../db');

exports.create = function(payment,referencenum,supplier,paymentdate,ammount) {
  var response = db.INSERT(`compra`,
  `payment,referencenum,supplier,paymentdate,ammount,unitprice,totalprice`,
  `\'${payment}\',\'${referencenum}\',\'${supplier}\',\'${paymentdate}\',\'${ammount}\'`,
  null,
  `*`);
  return response;
};

exports.list = function() {
  var response = db.SELECT(`compra`);
  return response;
};

exports.view = function(id) {
  var response = db.SELECT(`compra`, `*`, `id=${id}`);
  return response;
};

exports.edit = function(id,payment,referencenum,supplier,paymentdate,ammount) {
  var response = db.UPDATE(`compra`,
  `payment=\'${payment}\',referencenum=\'${referencenum}\',supplier=\'${supplier}\',paymentdate=\'${paymentdate}\',ammount=\'${ammount}\'`,
  `id=${id}`,
  `*`);
  return response;
};

exports.delete = function(id) {
  var response = db.DELETE(`compra`, `id=${id}`);
  return response;
};
