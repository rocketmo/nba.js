"use strict";

var _should = require("should");

var _should2 = _interopRequireDefault(_should);

var _endpoints = require("./endpoints");

var constants = _interopRequireWildcard(_endpoints);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("api/data/constants/endpoints", function () {
  it("should export objects with `method` & `endpoint` keys", function (done) {
    Object.keys(constants).every(function (k) {
      var v = constants[k];
      return v.hasOwnProperty("endpoint") && v.hasOwnProperty("method");
    }).should.be.true();

    done();
  });

  it("should export objects with `endpoint` values that begin with a forward slash", function (done) {
    Object.keys(constants).every(function (k) {
      var v = constants[k];
      return v.hasOwnProperty("endpoint") && /^\/[^/]/g.test(v.endpoint);
    }).should.be.true();

    done();
  });
});