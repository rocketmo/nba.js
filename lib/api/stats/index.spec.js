"use strict";

var _should = require("should");

var _should2 = _interopRequireDefault(_should);

var _ = require("./");

var _2 = _interopRequireDefault(_);

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("api/stats/index", function () {
  describe("exports", function () {
    it("should export all DEFAULT constants", function (done) {
      _should2.default.equal(Object.keys(_constants.DEFAULTS).length, Object.keys(_2.default).length);
      done();
    });

    it("should only export functions", function (done) {
      Object.keys(_2.default).every(function (o) {
        return typeof _2.default[o] === "function";
      }).should.be.true();
      done();
    });

    it("should not export endpoint runner", function (done) {
      _2.default.should.not.have.property("nba");
      done();
    });
  });

  describe("requests", function () {
    it("should respond with a Promise", function (done) {
      var request = _2.default.allPlayers();
      request.should.be.Promise();
      done();
    });

    it("should respond with error-first callback", function (done) {
      _2.default.allPlayers(function (err, res) {
        _should2.default.exist(res);
        _should2.default.not.exist(err);
        done();
      });
    });
  });
});