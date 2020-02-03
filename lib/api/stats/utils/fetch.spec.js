"use strict";

var _should = require("should");

var _should2 = _interopRequireDefault(_should);

var _fetch = require("./fetch");

var _fetch2 = _interopRequireDefault(_fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var endpoint = "/stats/homepagev2";
var query = {
  GameScope: "Season",
  LeagueID: "00",
  PlayerOrTeam: "Player",
  PlayerScope: "All Players",
  Season: "2015-16",
  SeasonType: "Regular Season",
  StatType: "Traditional"
};

describe("api/stats/utils/fetch", function () {
  it("should return response/error as a Promise", function (done) {
    var request = (0, _fetch2.default)(endpoint, { query: query });
    request.should.be.Promise();
    done();
  });

  it("should throw 400 on invalid request", function (done) {
    var request = (0, _fetch2.default)(endpoint, { query: {} });

    request.catch(function (err) {
      _should2.default.exist(err);
      err.statusCode.should.equal(400);
      done();
    });
  });

  it("should support full URLs as `endpoint` parameter", function (done) {
    var request = (0, _fetch2.default)("http://stats.nba.com/stats/teamdetails", {
      query: { teamId: 1610612741 }
    });

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