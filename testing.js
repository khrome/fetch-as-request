var request = require('request');
var formData = require('form-data');
var polyMod = require('polymorphic-request');
var poly = polyMod.fetch(fetch, formData);
var testable = polyMod.testing(poly);
module.exports = testable;
module.exports.default = testable;
module.exports.request = testable;
