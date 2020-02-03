"use strict";

var _should = require("should");

var _should2 = _interopRequireDefault(_should);

var _defaults = require("./defaults");

var constants = _interopRequireWildcard(_defaults);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("api/stats/constants/defaults", function () {
  it("should not export DEFAULTS", function (done) {
    constants.should.not.have.property("DEFAULTS");
    _should2.default.not.exist(constants.DEFAULTS);
    done();
  });

  it("should export objects with `method`, `endpoint` & `defaults` keys", function (done) {
    Object.keys(constants).every(function (k) {
      var v = constants[k];
      return v.hasOwnProperty("endpoint") && v.hasOwnProperty("defaults") && v.hasOwnProperty("method");
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