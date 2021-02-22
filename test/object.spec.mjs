import {describe, it} from "mocha";
import chai from "chai";
import {objectPropertySet} from "../sources/javascript/object.mjs";

const {expect} = chai;

describe("object", () => {
    describe("objectPropertySet", () => {
        it("should return an error if the first parameter is not an object", () => {
            objectPropertySet("", [], "").whenError(error => {
                expect(error).to.equal('target is not an object in objectPropertySet(paths, value, target), received ""');
            });
        });

        it("should return an error if the second parameter is not an array", () => {
            objectPropertySet({}, "", "").whenError(error => {
                expect(error).to.equal('paths is not an array in objectPropertySet(paths, value, target), received ""');
            });
        });

        it("should return an error if the second parameter does not contain strings only", () => {
            objectPropertySet({}, [123], "").whenError(error => {
                expect(error).to.equal("paths does not contain only strings in objectPropertySet(paths, value, target), received [123]");
            });
        });

        it("should set the property of an object", () => {
            const target = {name: ""};

            objectPropertySet(target, ["name"], "name");

            expect(target).to.deep.equal({name: "name"});
        });

        it("should set the property of an object that does not exist yet", () => {
            const target = {};

            objectPropertySet(target, ["name"], "name");

            expect(target).to.deep.equal({name: "name"});
        });

        it("should set the property of an object that is nested", () => {
            const target = {directories: {lib: ""}};

            objectPropertySet(target, ["directories", "lib"], "lib");

            expect(target).to.deep.equal({directories: {lib: "lib"}});
        });

        it("should set the property that does not exist yet of an object that is nested", () => {
            const target = {};

            objectPropertySet(target, ["directories", "lib"], "lib");

            expect(target).to.deep.equal({directories: {lib: "lib"}});
        });
    });
});