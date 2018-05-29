var db = require('../db');

exports.create = function(date,targetDay,status,name,last_name,email,phone) {
  var response = db.INSERT(`pending`,
  `date,targetDay,status,name,last_name,email,phone`,
  `\'${date}\',\'${targetDay}\',\'${status}\',\'${name}\',\'${last_name}\',\'${email}\',\'${phone}\'`,
  null,
  `*`);
  return response;
};

exports.list = function() {
  var response = db.SELECT(`pending`);
  return response;
};

exports.view = function(id) {
  var response = db.SELECT(`pending`, `*`, `id=${id}`);
  return response;
};

exports.edit = function(id,date,targetDay,status,name,last_name,email,phone) {
  var response = db.UPDATE(`pending`,
  `date=\'${date}\',targetDay=\'${targetDay}\',status=\'${status}\',name=\'${name}\',last_name=\'${last_name}\',email=\'${email}\',phone=\'${phone}\'`,
  `id=${id}`,
  `*`);
  return response;
};

exports.delete = function(id) {
  var response = db.DELETE(`pending`, `id=${id}`);
  return response;
};
