import {describe, it} from "mocha";
import chai from "chai";
import {removeTrailingLeadingSpaces, toList} from "../sources/javascript/string.mjs";

const {expect} = chai;

// TODO: all test (+object forgot some functions)

describe("string", () => {
    describe("removeTrailingLeadingSpaces", () => {
        it("should return an error if the first parameter is not a string", () => {
            removeTrailingLeadingSpaces(123).whenError(error => {
                expect(error).to.equal("text is not a string in removeTrailingLeadingSpaces(text), received 123");
            });
        });

        it("should remove all spaces before and after a text", () => {
            expect(removeTrailingLeadingSpaces("   bonjour   ").withDefault("bonsoir")).to.equal("bonjour");
        });
    });

    describe("toList", () => {
        it("should return an error if the first parameter is not a string", () => {
            toList(123).whenError(error => {
                expect(error).to.equal("text is not a string in toList(text), received 123");
            });
        });

        it("should turn a text into a coma-separated list", () => {
            expect(toList("  first  ,   second  ,  third  ").withDefault([])).to.deep.equal(["first", "second", "third"]);
        });
    });
});