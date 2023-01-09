class Person {
  // Your code here
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `${this.name} say Hi.`;
  }

  visit(person) {
    return `${this.name} visited ${person.name}`;
  }

  switchVisit(person) {
    return person.visit(this);
  }

  update(person) {
    if (person.name && person.age && typeof person.age === "number") {
      this.name = person.name;
      this.age = person.age;
    } else {
      throw TypeError(
        "Argument must an object and have name and age attribute"
      );
    }
  }

  tryUpdate(person) {
    try {
      this.update(person);
      return true;
    } catch {
      return false;
    }
  }

  greetAll(people) {
    // Take in an array
    // Make array holder
    // If any object in array instance of person
    //    greet person and push string into array
    if (!Array.isArray(people)) {
      throw new TypeError("Must be array of people");
    } else {
      return people.map((person) => person.sayHello());
    }
  }
}

module.exports = Person;
