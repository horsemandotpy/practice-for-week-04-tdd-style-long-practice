const { expect } = require("chai");
const myMap = require("../problems/my-map");
const spies = require("chai-spies");
const chai = require("chai");
chai.use(spies);

describe("myMap", function() {
  let func;
  let callbackSpy;
  const arr = [1, 2, 3];
  const doubleNum = (ele) => ele * 2;

  beforeEach(() => {
    // Run myMap with the array and call back before each spec
    // Spy on callback to check if it have been called
    callbackSpy = chai.spy(doubleNum);
    func = myMap(arr, callbackSpy);
  });

  it("should not mutate the original array", () => {
    expect(arr).to.eql([1, 2, 3]);
  });

  it("should not call Array.map", () => {
    // Spy on Array.map to ensure it has not been called.
    const spy = chai.spy.on(arr, "map");
    expect(spy).to.be.spy;
    expect(spy).to.not.have.been.called();
  });

  it("should call the callback", () => {
    expect(callbackSpy).to.be.spy;
    expect(callbackSpy).to.have.been.called.exactly(arr.length);
  });

  it("should return correct array", () => {
    expect(func).to.deep.equal([2, 4, 6]);
  });
});
