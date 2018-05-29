var db = require('../db');

exports.create = function(sku,description,dateinventory,status,balance) {
  var response = db.INSERT(`inventario`,
  `sku,description,dateinventory,status,balance`,
  `\'${sku}\',\'${description}\',\'${dateinventory}\',\'${status}\',\'${balance}\'`,
  null,
  `*`);
  return response;
};

exports.list = function() {
  var response = db.SELECT(`inventario`);
  return response;
};

exports.view = function(id) {
  var response = db.SELECT(`inventario`, `*`, `id=${id}`);
  return response;
};

exports.edit = function(id,sku,description,dateinventory,status,balance) {
  var response = db.UPDATE(`inventario`,
  `sku=\'${sku}\',description=\'${description}\',dateinventory=\'${dateinventory}\',status=\'${status}\',balance=\'${balance}\'`,
  `id=${id}`,
  `*`);
  return response;
};

exports.delete = function(id) {
  var response = db.DELETE(`inventario`, `id=${id}`);
  return response;
};
