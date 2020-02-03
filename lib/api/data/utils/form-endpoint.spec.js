"use strict";

var _should = require("should");

var _should2 = _interopRequireDefault(_should);

var _formEndpoint = require("./form-endpoint");

var _formEndpoint2 = _interopRequireDefault(_formEndpoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("api/data/utils/form-endpoint", function () {
  it("should export a function", function (done) {
    _formEndpoint2.default.should.be.a.Function;
    done();
  });

  it("should replace {{variables}} with the provided value", function (done) {
    (0, _formEndpoint2.default)("{{year}}", { year: "2016" }).should.eql("2016");
    done();
  });

  it("shouldn't do anything with {{variables}} that have no value", function (done) {
    (0, _formEndpoint2.default)("{{year}}", {}).should.eql("{{year}}");
    (0, _formEndpoint2.default)("{{name}}{{year}}", { name: "nba" }).should.eql("nba{{year}}");
    done();
  });

  it("should return the string when no params are provided", function (done) {
    (0, _formEndpoint2.default)("nba").should.eql("nba");
    (0, _formEndpoint2.default)("{{name}}").should.eql("{{name}}");
    done();
  });
});