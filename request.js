var fetch = require('fetch');
var formData = require('form-data');
var poly = require('polymorphic-request').fetch(fetch, formData);
module.exports = poly;
module.exports.default = poly;
module.exports.request = poly;
