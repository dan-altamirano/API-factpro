var db = require('../db');

exports.create = function(name,description) {
  var response = db.INSERT(`packages`,
  `name,description`,
  `\'${name}\',\'${description}\'`,
  null,
  `*`);
  return response;
};

exports.list = function() {
  var response = db.SELECT(`packages`);
  return response;
};

exports.view = function(id) {
  var response = db.SELECT(`packages`, `*`, `id=${id}`);
  return response;
};

exports.edit = function(id,name,description) {
  var response = db.UPDATE(`packages`,
  `name=\'${name}\',description=\'${description}\'`,
  `id=${id}`,
  `*`);
  return response;
};

exports.delete = function(id) {
  var response = db.DELETE(`packages`, `id=${id}`);
  return response;
};
