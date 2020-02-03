"use strict";

var _should = require("should");

var _should2 = _interopRequireDefault(_should);

var _endpointWorker = require("./endpoint-worker");

var worker = _interopRequireWildcard(_endpointWorker);

var _constants = require("./../constants");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var w = worker.work;

describe("api/stats/utils/endpoint-worker", function () {
  it("should respond with a Promise", function (done) {
    w(_constants.DEFAULTS.ALL_PLAYERS, null).should.be.Promise();
    done();
  });

  it("should respond with an error-first cb", function (done) {
    w(_constants.DEFAULTS.ALL_PLAYERS, null, function (err, res) {
      _should2.default.not.exist(err);
      _should2.default.exist(res);
      done();
    });
  });

  it("should throw HTTPError when invalid query params are provided", function (done) {
    w(_constants.DEFAULTS.PLAYER_AWARDS, null, function (err, res) {
      _should2.default.exist(err);
      err.should.have.property("body");
      err.body.should.eql("The field PlayerID must be between 1 and 2147483647.");
      done();
    });
  });
});