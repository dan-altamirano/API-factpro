var db = require('../db');

exports.create = function(name,birthdate,email,username,password) {
  var response = db.INSERT(`users`,
  `name,birthdate,email,username,password`,
  `\'${name}\',\'${birthdate}\',\'${email}\',\'${username}\',\'${password}\'`,
  null,
  `*`);
  return response;
};

exports.find = function(username,password) {
  var response = db.SELECT(`users`, `*`, `username=\'${username}\' AND password=\'${password}\'`);
  return response;
};

exports.list = function() {
  var response = db.SELECT(`users`);
  return response;
};

exports.view = function(username) {
  var response = db.SELECT(`users`, `*`, `username=\'${username}\'`);
  return response;
};

exports.viewId = function(id) {
  var response = db.SELECT(`users`, `*`, `id=${id}`);
  return response;
};

exports.edit = function(id,name,birthdate,email,username,password) {
  var response = db.UPDATE(`users`,
  `name=\'${name}\',birthdate=\'${birthdate}\',email=\'${email}\',username=\'${username}\',password=\'${password}\'`,
  `id=${id}`,
  `*`);
  return response;
};

exports.delete = function(id) {
  var response = db.DELETE(`users`, `id=${id}`);
  return response;
};
