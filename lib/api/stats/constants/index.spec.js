"use strict";

var _should = require("should");

var _should2 = _interopRequireDefault(_should);

var _ = require("./");

var constants = _interopRequireWildcard(_);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("api/stats/constants/index", function () {
  it("should export something", function (done) {
    constants.should.not.be.empty();
    done();
  });

  it("should export URL object", function (done) {
    constants.should.have.property("URL");
    done();
  });

  it("should export DEFAULTS", function (done) {
    constants.should.have.property("DEFAULTS");
    done();
  });
});