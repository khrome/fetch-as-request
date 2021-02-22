var fetch = require('fetch');
var poly = require('polymorphic-request').fetch(fetch, window.FormData);
module.exports = poly;
module.exports.default = poly;
module.exports.request = poly;
