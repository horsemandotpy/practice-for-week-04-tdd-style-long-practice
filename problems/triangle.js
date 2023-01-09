// Your code here
class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  getPerimeter() {
    return this.side1 + this.side2 + this.side3;
  }

  validate() {
    this.isValid = this.hasValidSideLengths();
  }

  hasValidSideLengths() {
    return (
      this.side1 + this.side2 > this.side3 &&
      this.side2 + this.side3 > this.side1 &&
      this.side1 + this.side3 > this.side2
    );
  }

  static getValidTriangles(...triangles) {
    // Take in number of triangles
    // Make new Array holder
    // For each triangle use it's own hasValidSideLengths method
    // If true then push into array holder
    // Return array holder
    return triangles.filter(
      (triangle) => triangle.hasValidSideLengths() === true
    );
  }
}

class Scalene extends Triangle {
  constructor(side1, side2, side3) {
    super(side1, side2, side3);
  }

  validate() {
    this.isValid = this.isScalene();
  }

  isScalene() {
    if (this.hasValidSideLengths()) {
      if (
        this.side1 !== this.side2 &&
        this.side2 !== this.side3 &&
        this.side1 !== this.side3
      ) {
        return true;
      }
    }

    return false;
  }
}

class Isosceles extends Scalene {
  constructor(side1, side2, side3) {
    super(side1, side2, side3);
  }

  validate() {
    this.isValid = this.isIsosceles();
  }

  isIsosceles() {
    if (this.hasValidSideLengths()) {
      if (
        this.side1 === this.side2 ||
        this.side1 === this.side3 ||
        this.side2 === this.side3
      ) {
        return true;
      }
    }
    return false;
  }
}

class Equilateral extends Triangle {
  constructor(side1, side2, side3) {
    super(side1, side2, side3);
  }

  isEquilateral() {
    if (this.side1 === this.side2 && this.side2 === this.side3) {
      return true;
    }
    return false;
  }
}

module.exports = { Triangle, Scalene, Isosceles, Equilateral };
