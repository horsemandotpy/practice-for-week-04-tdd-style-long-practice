// Your code here
const Person = require("../problems/person");
const chai = require("chai");
const { expect } = require("chai");

describe("Test Person class", () => {
        let person;
        let person2;
        let helloExpress;
        let visitExpress;
        let switchExpress;

        beforeEach(() => {
                person = new Person("Trin", 19);
                person2 = new Person("Linh", 21);
                helloExpress = person.sayHello();
                visitExpress = person.visit(person2);
                switchExpress = person.switchVisit(person2);
        });

        describe("should have name and age attribute", () => {
                it("should have name attribute", () => {
                        expect(person.name).to.exist;
                });
                it("should have age attribute", () => {
                        expect(person.age).to.exist;
                });
        });

        describe("should have sayHello method that return greeting message", () => {
                it("should return greeting message", () => {
                        expect(helloExpress).to.equal(`${person.name} say Hi.`);
                });
        });

        describe("should have visit method  that return visited message for anther person", () => {
                it("should return visit message", () => {
                        expect(visitExpress).to.equal(`${person.name} visited ${person2.name}`);
                });
        });

        describe("should have switchVisit method that invoke visit method of the other person passed in", () => {
                it("should return visit message", () => {
                        expect(switchExpress).to.equal(`${person2.name} visited ${person.name}`);
                });
        });

        describe("should have update method that change name and age of a person", () => {
                let badInput;
                let badObjInput;

                beforeEach(() => {
                        person = new Person("Trang", 21);
                        badInput = () => person.update();
                        badObjInput = () => person.update({});
                        person.update({ name: "Ha", age: 22 });
                });

                it("should throw error if argument is not an object", () => {
                        expect(badInput).to.throw(TypeError);
                });

                it("should throw TypeError if agurment is not have  name and age attribute", () => {
                        expect(badObjInput).to.throw(TypeError);
                });

                it("should update name and age correctly as input", () => {
                        expect(person.name).to.equal("Ha");
                        expect(person.age).to.equal(22);
                });
        });

        describe("should have tryUpdate method return boolean of update function status", () => {
                let status;

                beforeEach(() => {
                        person = new Person("Hanh", 23);
                });

                it("should update the object properly and return true", () => {
                        status = person.tryUpdate({ name: "Hanh", age: 24 });
                        expect(person.age).to.equal(24);
                        expect(status).to.equal(true);
                });

                it("should return false if update throw error", () => {
                        status = person.tryUpdate({ name: "Hanh", age: "twenties" });
                        expect(status).to.equal(false);
                });
        });

        describe("should have greetAll method call sayHello on all element in an person array", () => {
                let greetAll;
                let arr;

                beforeEach(() => {
                        person = new Person("hanh", 25);
                        person2 = new Person("linh", 23);
                        arr = [person, person2];
                });
                it("should throw error if input is not array", () => {
                        greetAll = () => person.greetAll();
                        expect(greetAll).to.throw(TypeError);
                });

                it("should return an array contain all greeting message", () => {
                        greetAll = person.greetAll(arr);
                        expect(greetAll).to.deep.equal([`hanh say Hi.`, `linh say Hi.`]);
                });
        });
});
