import {describe, it} from "mocha";
import chai from "chai";
import {typeOf} from "../sources/javascript/type.js";

const {expect} = chai;

describe("type", () => {
    describe("typeOf", () => {
        it("should return the type for a number", () => {
            expect(typeOf(123)).to.equal("Number");
        });

        it("should return the type for a string", () => {
            expect(typeOf("string")).to.equal("String");
        });

        it("should return the type for an object", () => {
            expect(typeOf({})).to.equal("Object");
        });

        it("should return the type for an array", () => {
            expect(typeOf([])).to.equal("Array");
        });

        it("should return the type for a synchronous function", () => {
            expect(typeOf(() => {})).to.equal("Function");
        });

        it("should return the type for a symbol", () => {
            expect(typeOf(Symbol("symbol"))).to.equal("Symbol");
        });

        it("should return the type for undefined", () => {
            expect(typeOf(undefined)).to.equal("Undefined");
        });

        it("should return the type for Null", () => {
            expect(typeOf(null)).to.equal("Null");
        });
    });
});