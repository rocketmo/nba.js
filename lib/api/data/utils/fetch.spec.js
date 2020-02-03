"use strict";

var _should = require("should");

var _should2 = _interopRequireDefault(_should);

var _fetch = require("./fetch");

var _fetch2 = _interopRequireDefault(_fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ENDPOINT = "/data/10s/prod/v1/scoreboard.json";

describe("api/data/utils/fetch", function () {
  it("should return response/error as a Promise", function (done) {
    var request = (0, _fetch2.default)(ENDPOINT);
    request.should.be.Promise();
    done();
  });

  it("should respond with response/error", function (done) {
    var request = (0, _fetch2.default)(ENDPOINT);

    request.then(function (res) {
      _should2.default.exist(res);
      done();
    });

    request.catch(function (err) {
      _should2.default.exist(err);
      done();
    });
  });

  it("should throw 404 on invalid request", function (done) {
    var request = (0, _fetch2.default)("FOOBAR");

    request.catch(function (err) {
      _should2.default.exist(err);
      err.statusCode.should.equal(404);
      done();
    });
  });

  it("should support full URLs as `endpoint` parameter", function (done) {
    var request = (0, _fetch2.default)("http://data.nba.net" + ENDPOINT);

    request.then(function (res) {
      _should2.default.exist(res);
      done();
    });

    request.catch(function (err) {
      _should2.default.exist(err);
      done();
    });
  });
});