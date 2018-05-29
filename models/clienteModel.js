var db = require('../db');

exports.create = function(score,comment,name,last_name,email,phone) {
  var response = db.INSERT(`clients`,
  `score,comment,name,last_name,email,phone`,
  `\'${score}\',\'${comment}\',\'${name}\',\'${last_name}\',\'${email}\',\'${phone}\'`,
  null,
  `*`);
  return response;
};

exports.list = function() {
  var response = db.SELECT(`clients`);
  return response;
};

exports.view = function(id) {
  var response = db.SELECT(`clients`, `*`, `id=${id}`);
  return response;
};

exports.edit = function(id,score,comment,name,last_name,email,phone) {
  var response = db.UPDATE(`clients`,
  `score=\'${score}\',comment=\'${comment}\',name=\'${name}\',last_name=\'${last_name}\',email=\'${email}\',phone=\'${phone}\'`,
  `id=${id}`,
  `*`);
  return response;
};

exports.delete = function(id) {
  var response = db.DELETE(`clients`, `id=${id}`);
  return response;
};
