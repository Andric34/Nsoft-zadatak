var assert = require("assert");
var surrounding_sum = require("../script");
describe("testing the sum function", function () {
  it("should return a string and sum of 405", function () {
    assert.strictEqual(
      surrounding_sum(45),
      "Sum of surrounding numbers around the input is equal to : " + 405
    );
  });
});
describe("testing the sum function", function () {
  it("should return that input is not a number", function () {
    assert.strictEqual(
      surrounding_sum("some string"),
      "Your input is not a number. Please input a number from 1 to 100!"
    );
  });
});
describe("testing the sum function", function () {
  it("should return that a number is less than 1 and not in the matrix", function () {
    assert.strictEqual(
      surrounding_sum(-45),
      "Inputted number is less than 1. Please input a number from 1 to 100!"
    );
  });
});
describe("testing the sum function", function () {
  it("should return that a number is greater than 100 and not in the matrix", function () {
    assert.strictEqual(
      surrounding_sum(455),
      "Inputted number is greater than 100. Please input a number from 1 to 100!"
    );
  });
});
describe("testing the sum function", function () {
  it("should return that input doesn't have 8 surrounding numbers", function () {
    assert.strictEqual(
      surrounding_sum(5),
      "Inputted number doesn't have 8 surrounding numbers."
    );
  });
});
