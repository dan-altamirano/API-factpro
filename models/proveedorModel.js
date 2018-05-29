var db = require('../db');

exports.create = function(ocupation,comment,name,last_name,email,phone) {
  var response = db.INSERT(`providers`,
  `ocupation,comment,name,last_name,email,phone`,
  `\'${ocupation}\',\'${comment}\',\'${name}\',\'${last_name}\',\'${email}\',\'${phone}\'`,
  null,
  `*`);
  return response;
};

exports.list = function() {
  var response = db.SELECT(`providers`);
  return response;
};

exports.view = function(id) {
  var response = db.SELECT(`providers`, `*`, `id=${id}`);
  return response;
};

exports.edit = function(id,ocupation,comment,name,last_name,email,phone) {
  var response = db.UPDATE(`providers`,
  `ocupation=\'${ocupation}\',comment=\'${comment}\',name=\'${name}\',last_name=\'${last_name}\',email=\'${email}\',phone=\'${phone}\'`,
  `id=${id}`,
  `*`);
  return response;
};

exports.delete = function(id) {
  var response = db.DELETE(`providers`, `id=${id}`);
  return response;
};
