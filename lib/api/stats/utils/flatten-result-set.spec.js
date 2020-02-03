"use strict";

var _should = require("should");

var _should2 = _interopRequireDefault(_should);

var _flattenResultSet = require("./flatten-result-set");

var _flattenResultSet2 = _interopRequireDefault(_flattenResultSet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var headers = ["RANK", "PLAYER_ID", "PLAYER", "TEAM_ID", "TEAM_ABBREVIATION", "TEAM_NAME", "JERSEY_NUM", "PLAYER_POSITION", "PTS"];
var rowSet = [[1, 201939, "Stephen Curry", 1610612744, "GSW", "Golden State Warriors", "30", "G", 30.1], [2, 201935, "James Harden", 1610612745, "HOU", "Houston Rockets", "13", "G", 29.0]];
var name = "top_2_scoring_pgs";

var resultSet = [{ headers: headers, rowSet: rowSet, name: name }];

describe("api/stats/utils/flatten-result-set", function () {
  it("should return a Promise", function (done) {
    var flattened = (0, _flattenResultSet2.default)(resultSet);
    flattened.should.be.Promise();
    done();
  });

  it("should return an object hashed by resultSet name", function (done) {
    (0, _flattenResultSet2.default)(resultSet).then(function (res) {
      Object.keys(res)[0].should.eql(name);
      done();
    });
  });

  it("should not alter row values", function (done) {
    (0, _flattenResultSet2.default)(resultSet).then(function (res) {
      var _loop = function _loop(i) {
        Object.keys(res[name][i]).map(function (v) {
          return res[name][i][v];
        }).should.eql(rowSet[i]);
      };

      for (var i in rowSet) {
        _loop(i);
      }

      done();
    });
  });

  it("should have lowercase keys", function (done) {
    (0, _flattenResultSet2.default)(resultSet).then(function (res) {
      for (var i in rowSet) {
        Object.keys(res[name][i]).every(function (v) {
          return v === v.toLowerCase();
        }).should.be.true();
      }

      done();
    });
  });

  it("should flatten multiple sets and return all with `name` used as key", function (done) {
    (0, _flattenResultSet2.default)([{ headers: headers, rowSet: rowSet, name: name }, { headers: headers, rowSet: rowSet, name: name + "2" }]).then(function (res) {
      Object.keys(res).should.have.length(2);
      res.should.have.property(name);
      res.should.have.property(name + "2");
      done();
    });
  });

  it("should merge multiple sets with same `name` key", function (done) {
    (0, _flattenResultSet2.default)(resultSet.concat(resultSet)).then(function (res) {
      Object.keys(res).should.have.length(1);
      res.should.have.property(name);
      done();
    });
  });
});