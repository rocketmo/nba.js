"use strict";

var _should = require("should");

var _should2 = _interopRequireDefault(_should);

var _worker = require("./worker");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ENDPOINT = "/data/10s/prod/v1/current/standings_all.json";

describe("api/data/utils/worker", function () {
  it("should respond with a Promise", function (done) {
    (0, _worker.work)(ENDPOINT).should.be.Promise();
    done();
  });

  it("should respond with an error-first cb", function (done) {
    (0, _worker.work)(ENDPOINT, function (err, res) {
      _should2.default.not.exist(err);
      _should2.default.exist(res);
      done();
    });
  });

  it("should throw HTTPError on invalid request", function (done) {
    (0, _worker.work)("FOOBAR", function (err, res) {
      _should2.default.exist(err);
      err.should.have.property("message");
      err.message.should.eql("Response code 404 (Not Found)");
      done();
    });
  });
});