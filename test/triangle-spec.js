// Your code here
const {
    Triangle,
    Scalene,
    Isosceles,
    Equilateral,
} = require("../problems/triangle");
const chai = require("chai");
const expect = chai.expect;

describe("Testing triangle class", () => {
    let triangle;
    let triangle2;
    let triangle3;

    beforeEach(() => {
        triangle = new Triangle(2, 3, 4);
        triangle2 = new Triangle(2, 2, 8);
        triangle3 = new Triangle(2, 2, 2);
    });

    it("should set up triangle side properly", () => {
        expect(triangle.side1).to.equal(2);
        expect(triangle.side2).to.equal(3);
        expect(triangle.side3).to.equal(4);
    });

    it("should have getPerimeter method that return sum of three sides", () => {
        let getPerimeter = triangle.getPerimeter();
        expect(getPerimeter).to.equal(9);
    });

    it("should have hasValidSideLengths method that check triangle sides length", () => {
        let hasValidSideLengths = triangle.hasValidSideLengths();
        let notValidSideLengths = triangle2.hasValidSideLengths();
        expect(notValidSideLengths).to.equal(false);
        expect(hasValidSideLengths).to.equal(true);
    });

    it("should have validate method that add valid property into an object", () => {
        triangle.validate();
        triangle2.validate();
        expect(triangle.isValid).to.equal(true);
        expect(triangle2.isValid).to.equal(false);
    });

    it("should take in any amount of triangle instance and return the valids", () => {
        let triangles = Triangle.getValidTriangles(triangle, triangle2, triangle3);
        expect(triangles).to.deep.equal([triangle, triangle3]);
    });
});

describe("Testing scalene class", () => {
    let scalene;
    beforeEach(() => {
        scalene = new Scalene(2, 3, 4);
    });

    it("should have proper side length", () => {
        expect(scalene.side1).to.equal(2);
        expect(scalene.side2).to.equal(3);
        expect(scalene.side3).to.equal(4);
    });

    it("should have isScalene method", () => {
        let isScalene = scalene.isScalene();
        expect(isScalene).to.equal(true);
    });

    it("should override validate method of triangle class", () => {
        scalene.validate();
        let scalene2 = new Scalene(2, 2, 2);
        scalene2.validate();
        expect(scalene.isValid).to.equal(true);
        expect(scalene2.isValid).to.equal(false);
    });
});

describe("Tesing isosceles class", () => {
    let isosceles;
    let isosceles2;

    beforeEach(() => {
        isosceles = new Isosceles(2, 2, 3);
        isosceles2 = new Isosceles(2, 1, 1);
    });

    it("should have proper sides property", () => {
        expect(isosceles.side1).to.equal(2);
        expect(isosceles.side2).to.equal(2);
        expect(isosceles.side3).to.equal(3);
    });

    it("should have isIsosceles method", () => {
        let isIsosceles = isosceles.isIsosceles();
        let isIsosceles2 = isosceles2.isIsosceles();
        expect(isIsosceles).to.equal(true);
        expect(isIsosceles2).to.equal(false);
    });

    it("should have validate override validate of parent class", () => {
        isosceles.validate();
        isosceles2.validate();
        expect(isosceles.isValid).to.equal(true);
        expect(isosceles2.isValid).to.equal(false);
    });
});

describe("Testing Equilateral class", () => {
    let equilateral;

    beforeEach(() => {
        equilateral = new Equilateral(3, 3, 3);
    });

    it("should have proper sides length", () => {
        expect(equilateral.side1).to.equal(3);
        expect(equilateral.side2).to.equal(3);
        expect(equilateral.side3).to.equal(3);
    });

    it('should have all sideslength equal',  () => {
       let isEquilateral = equilateral.isEquilateral(); 
        expect(isEquilateral).to.equal(true);
    })
});
