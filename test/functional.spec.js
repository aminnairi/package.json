import {describe, it} from "mocha";
import chai from "chai";
import {curry} from "../sources/javascript/functional.js";

const {expect} = chai;

describe("curry", () => {
    const add = curry((x, y) => x + y);

    it("should return a function", () => {
        expect(add).to.be.a("function");
    });

    it("should return a function that return a function when providing not enough arguments", () => {
        expect(add(1)).to.be.a("function");
    });

    it("should allow creating functions that can return the result of the curried function", () => {
        const increment = add(1);
        expect(increment(2)).to.equal(3);
    });

    it("should return the result of the function when providing enough arguments", () => {
        expect(add(1, 2)).to.equal(3);
    });
});