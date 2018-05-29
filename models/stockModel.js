var db = require('../db');

exports.create = function(id,id_prod,disp,exist) {
  var response = db.INSERT(`stock`,
  `id,id_prod,disp,exist`,
  `\'${id}\',\'${id_prod}\',\'${disp}\',\'${exist}\'`,
  null,
  `*`);
  return response;
};

exports.list = function() {
  var response = db.SELECT(`stock`);
  return response;
};

exports.view = function(id) {
  var response = db.SELECT(`stock`, `*`, `id=${id}`);
  return response;
};

exports.edit = function(id,id_prod,disp,exist) {
  var response = db.UPDATE(`stock`,
  `id=\'${id}\',id_prod=\'${id_prod}\',disp=\'${disp}\',exist=\'${exist}\'`,
  `id=${id}`,
  `*`);
  return response;
};

exports.delete = function(id) {
  var response = db.DELETE(`stock`, `id=${id}`);
  return response;
};
