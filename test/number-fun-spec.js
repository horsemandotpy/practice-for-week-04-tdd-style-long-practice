// Your code here
const chai = require("chai");
const expect = chai.expect;
const { returnsThree, reciprocal } = require("../problems/number-fun");

describe("Test function returnsThree", () => {
  let returnValue = returnsThree();
  it("Should return number 3", () => {
    expect(returnValue).to.equal(3);
  });
});

describe("Test function reciprocal", () => {
  let withInteger = reciprocal(3);
  let withInteger2 = reciprocal(2);

  describe("With valid input", () => {
    it("Should return reciprocal of a integer", () => {
      expect(withInteger).to.equal(1 / 3);
      expect(withInteger2).to.equal(1 / 2);
    });

    let withDecimal = reciprocal(3.3);
    it("Should return reciprocal of a decimal number", () => {
      expect(withDecimal).to.equal(1 / 3.3);
    });

    let withFraction = reciprocal(8 / 6);
    it("Should return reciprocal of a fraction", () => {
      expect(withFraction).to.equal(6 / 8);
    });
  });

  let withInvalidValue3 = () => {
    reciprocal(-1);
  };
  let withInvalidValue4 = () => {
    reciprocal(9999999999);
  };
  describe("With invalid input", () => {
    it("Should only accept a range of numbers", () => {
      expect(withInvalidValue3).to.throw(TypeError);
      expect(withInvalidValue4).to.throw(TypeError);
    });
  });
});
