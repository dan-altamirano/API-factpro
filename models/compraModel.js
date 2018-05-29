var db = require('../db');

exports.create = function(department,productname,orderdate,deliverydate,quantity,unitprice,totalprice) {
  var response = db.INSERT(`compra`,
  `department,productname,orderdate,deliverydate,quantity,unitprice,totalprice`,
  `\'${department}\',\'${productname}\',\'${orderdate}\',\'${deliverydate}\',\'${quantity}\',\'${unitprice}\',\'${totalprice}\'`,
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

exports.edit = function(id,department,productname,orderdate,deliverydate,quantity,unitprice,totalprice) {
  var response = db.UPDATE(`compra`,
  `department=\'${department}\',productname=\'${productname}\',orderdate=\'${orderdate}\',deliverydate=\'${deliverydate}\',quantity=\'${quantity}\',unitprice=\'${unitprice}\',totalprice=\'${totalprice}\'`,
  `id=${id}`,
  `*`);
  return response;
};

exports.delete = function(id) {
  var response = db.DELETE(`compra`, `id=${id}`);
  return response;
};
