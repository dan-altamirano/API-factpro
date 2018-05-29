var db = require('../db');

exports.create = function(client,dateStart,dateEnd,persons) {
  var response = db.INSERT(`events`,
  `client,dateStart,dateEnd,persons`,
  `\'${client}\',\'${dateStart}\',\'${dateEnd}\',\'${persons}\'`,
  null,
  `*`);
  return response;
};

exports.list = function() {
  var response = db.SELECT(`events`);
  return response;
};

exports.listPackage = function(event_id) {
  var response = db.SELECT(`eventsPackages`, `*`, `event_id=${event_id}`);
  return response;
};

exports.view = function(id) {
  var response = db.SELECT(`events`, `*`, `id=${id}`);
  return response;
};

exports.edit = function(id,dateStart,dateEnd,persons) {
  var response = db.UPDATE(`events`,
  `dateStart=\'${dateStart}\',dateEnd=\'${dateEnd}\',persons=\'${persons}\'`,
  `id=${id}`,
  `*`);
  return response;
};

exports.delete = function(id) {
  var response = db.DELETE(`events`, `id=${id}`);
  return response;
};

exports.createPackage = function(event_id,package_id) {
  var response = db.INSERT(`eventsPackages`,
  `event_id,package_id`,
  `${event_id},${package_id}`,
  null,
  `*`);
  return response;
};

exports.deletePackage = function(event_id,package_id) {
  var response = db.DELETE(`eventsPackages`, `event_id=${event_id} AND package_id=${package_id}`);
  return response;
};
