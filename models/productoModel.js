var db = require('../db');

exports.create = function(sku,name,price,quantity) {
  var response = db.INSERT(`producto`,
  `sku,name,price,quantity`,
  `\'${sku}\',\'${name}\',\'${price}\',\'${quantity}\'`,
  null,
  `*`);
  return response;
};

exports.list = function() {
  var response = db.SELECT(`producto`);
  return response;
};

exports.view = function(id) {
  var response = db.SELECT(`producto`, `*`, `id=${id}`);
  return response;
};

exports.edit = function(id,sku,name,price,quantity) {
  var response = db.UPDATE(`producto`,
  `sku=\'${sku}\',name=\'${name}\',price=\'${price}\',quantity=\'${quantity}\'`,
  `id=${id}`,
  `*`);
  return response;
};

exports.delete = function(id) {
  var response = db.DELETE(`producto`, `id=${id}`);
  return response;
};
