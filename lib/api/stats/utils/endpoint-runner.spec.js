"use strict";

var _should = require("should");

var _should2 = _interopRequireDefault(_should);

var _endpointRunner = require("./endpoint-runner");

var runner = _interopRequireWildcard(_endpointRunner);

var _endpointWorker = require("./endpoint-worker");

var worker = _interopRequireWildcard(_endpointWorker);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var r = runner.run(worker.work);

describe("api/stats/utils/endpoint-runner", function () {
  it("should error out if no worker is provided", function (done) {
    runner.run()(null, null, function (err, res) {
      _should2.default.exist(err);
      err.should.have.property("message");
      err.message.should.eql("Expected worker function.");
      done();
    });
  });

  it("should error out when an invalid endpoint is provided", function (done) {
    r("INVALID_ENDPOINT", null, function (err, res) {
      _should2.default.exist(err);
      err.should.have.property("message");
      err.message.should.eql("Invalid endpoint type.");
      done();
    }).catch(function (e) {
      return e;
    });
  });

  it("should respond with Promise", function (done) {
    r("ALL_PLAYERS", null).should.be.Promise();
    done();
  });

  it("should respond with error-first callback", function (done) {
    r("ALL_PLAYERS", null, function (err, res) {
      _should2.default.not.exist(err);
      _should2.default.exist(res);
      done();
    });
  });
});