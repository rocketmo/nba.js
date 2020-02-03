"use strict";

var _should = require("should");

var _should2 = _interopRequireDefault(_should);

var _ = require("./");

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("api/index", function () {
  it("should export `data` and `stats` objects", function (done) {
    _2.default.should.have.property("data");
    _2.default.should.have.property("stats");
    done();
  });
});