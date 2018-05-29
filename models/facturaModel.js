var db = require('../db');

exports.create = function(clientname,street,community,state,zipcode,rfc,ordernum,invoicedate,concept,payment,iva,totalprice) {
  var response = db.INSERT(`factura`,
  `clientname,street,community,state,zipcode,rfc,ordernum,invoicedate,concept,payment,iva,totalprice`,
  `\'${clientname}\',\'${street}\',\'${community}\',\'${state}\',\'${zipcode}\',\'${rfc}\',\'${ordernum}\',\'${invoicedate}\',\'${concept}\',\'${payment}\',\'${iva}\',\'${totalprice}\'`,
  null,
  `*`);
  return response;
};

exports.list = function() {
  var response = db.SELECT(`factura`);
  return response;
};

exports.view = function(id) {
  var response = db.SELECT(`factura`, `*`, `id=${id}`);
  return response;
};

exports.edit = function(id,clientname,street,community,state,zipcode,rfc,ordernum,invoicedate,concept,payment,iva,totalprice) {
  var response = db.UPDATE(`factura`,
  `clientname=\'${clientname}\',street=\'${street}\',community=\'${community}\',state=\'${state}\',zipcode=\'${zipcode}\',rfc=\'${rfc}\',ordernum=\'${ordernum}\',invoicedate=\'${invoicedate}\',concept=\'${concept}\',payment=\'${payment}\',iva=\'${iva}\',totalprice=\'${totalprice}\'`,
  `id=${id}`,
  `*`);
  return response;
};

exports.delete = function(id) {
  var response = db.DELETE(`factura`, `id=${id}`);
  return response;
};
