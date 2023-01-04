// Your code here
const chai = require("chai");
const reverseString = require("../problems/reverse-string");
const expect = chai.expect;

describe("Reverse String function", () => {
  let string = "fun";

  it("Should rever string input", () => {
    expect(reverseString(string)).to.equal("nuf");
  });

  const badInput = () => {reverseString(1)};
  it('Should throw error if input is invalid',  () => {
    expect(badInput).to.throw(TypeError);
  })
});
