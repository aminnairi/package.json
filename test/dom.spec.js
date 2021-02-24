import {describe, it} from "mocha";
import {expect} from "chai";
import {getAttribute, getElementById, on, reset, setAttribute, focus, click, appendTo, createElement} from "../sources/javascript/dom.js";
import {JSDOM} from "jsdom";

const jsdom = new JSDOM(`
    <!DOCTYPE html>
    <html>
        <body>
            <div id="div"></div>
            <form name="form"></form>
        </body>
    </html>
`);

global.window = jsdom.window;

describe("dom", () => {
    describe("getElementById", () => {
        it("should be defined", () => {
            expect(getElementById).to.be.a("function");
        });

        it("should return an error if the current context is not a browser", () => {
            global.window = null;

            getElementById("div").whenError(error => {
                expect(error).to.equal("Current context is not a browser");
            });

            global.window = jsdom.window;
        });

        it("should return an error if the first argument is not a string", () => {
            getElementById();
        });

        it("should retrieve the div", () => {
            getElementById("div").whenOk(element => {
                expect(element.nodeName).to.equal("DIV");
            }).whenError(error => {
                expect.fail(error);
            });
        });
    });

    describe("on", () => {
        it("should be defined", () => {
            expect(on).to.be.a("function");
        });

        it("should return an error if the current context is not a browser", () => {
            global.window = null;

            on("click", () => {}, jsdom.window.document).whenError(error => {
                expect(error).to.equal("Current context is not a browser");
            });

            global.window = jsdom.window;
        });

        it("should return an error if the first argument is not a string", () => {
            on(123, () => {}, jsdom.window.document).whenError(error => {
                expect(error).to.equal("event is not a string in on(event, callback, element), received 123");
            });
        });

        it("should return an error if the second argument is not a function", () => {
            on("click", 123, jsdom.window.document).whenError(error => {
                expect(error).to.equal("callback is not a synchronous function in on(event, callback, element), received 123");
            });
        });

        it("should return an error if the third argument is not an Element", () => {
            on("click", () => {}, 123).whenError(error => {
                expect(error).to.equal("element is not an Element in on(event, callback, element), received 123");
            });
        });

        it("should return the element where the listener is added", () => {
            on("click", () => {}, jsdom.window.document).whenOk(element => {
                expect(element.nodeNode).to.equal("#document");
            });
        });
    });

    describe("getAttribute", () => {
        it("should return an error if the current context is not a browser", () => {
            global.window = null;

            getAttribute("attribute", jsdom.window.document.body).whenError(error => {
                expect(error).to.equal("Current context is not a browser");
            });

            global.window = jsdom.window;
        });

        it("should return an error if the first argument is not a string", () => {
            getAttribute(123, jsdom.window.document.body).whenError(error => {
                expect(error).to.equal("attribute is not a string in getAttribute(attribute, element), received, 123");
            });
        });

        it("should return an error if the second argument is not an Element", () => {
            getAttribute("attribute", 123).whenError(error => {
                expect(error).to.equal("element is not an Element in getAttribute(attribute, element), received, 123");
            });
        });

        it("should return the attribute", () => {
            getAttribute("nodeName", global.window.document).whenOk(nodeName => {
                expect(nodeName).to.equal("#document");
            });
        });
    });

    describe("setAttribute", () => {
        it("should return an error if the current context is not a browser", () => {
            global.window = null;

            setAttribute("attribute", "value", jsdom.window.document.body).whenError(error => {
                expect(error).to.equal("Current context is not a browser");
            });

            global.window = jsdom.window;
        });

        it("should return an error if the first argument is not a string", () => {
            setAttribute(123, "value", jsdom.window.document.body).whenError(error => {
                expect(error).to.equal("attribute is not a string in setAttribute(attribute, value, element), received, 123");
            });
        });

        it("should return an error if the second argument is not a string", () => {
            setAttribute("attribute", 123, jsdom.window.document.body).whenError(error => {
                expect(error).to.equal("value is not a string in setAttribute(attribute, value, element), received, 123");
            });
        });

        it("should return an error if the third argument is not an Element", () => {
            setAttribute("attribute", "value", 123).whenError(error => {
                expect(error).to.equal("element is not an Element in setAttribute(attribute, value, element), received, 123");
            });
        });

        it("should set the attribute and return the element", () => {
            setAttribute("id", "body", global.window.document.body).whenOk(body => {
                expect(body.id).to.equal("body");
            });
        });
    });

    describe("reset", () => {
        it("should return an error if the current context is not a browser", () => {
            global.window = null;

            reset(jsdom.window.document.forms[0]).whenError(error => {
                expect(error).to.equal("Current context is not a browser");
            });

            global.window = jsdom.window;
        });

        it("should return an error if the first argument is not an Element", () => {
            reset(123).whenError(error => {
                expect(error).to.equal("formElement is not a HTMLFormElement in reset(formElement), received 123");
            });
        });

        it("should reset the form and return the latter", () => {
            reset(jsdom.window.document.forms[0]).whenOk(formElement => {
                expect(formElement.nodeName).to.equal("FORM");
            });
        });
    });

    describe("focus", () => {
        it("should return an error if the current context is not a browser", () => {
            global.window = null;

            focus(jsdom.window.document.forms[0]).whenError(error => {
                expect(error).to.equal("Current context is not a browser");
            });

            global.window = jsdom.window;
        });

        it("should return an error if the first argument is not an Element", () => {
            focus(123).whenError(error => {
                expect(error).to.equal("element is not a Element in focus(element), received 123");
            });
        });

        it("should focus the body and return the latter", () => {
            reset(jsdom.window.document.body).whenOk(body => {
                expect(body.nodeName).to.equal("BODY");
            });
        });
    });

    describe("click", () => {
        it("should return an error if the current context is not a browser", () => {
            global.window = null;

            click(jsdom.window.document.body).whenError(error => {
                expect(error).to.equal("Current context is not a browser");
            });

            global.window = jsdom.window;
        });

        it("should return an error if the first argument is not an Element", () => {
            click(123).whenError(error => {
                expect(error).to.equal("element is not a Element in click(element), received 123");
            });
        });

        it("should click the body and return the latter", () => {
            click(jsdom.window.document.body).whenOk(body => {
                expect(body.nodeName).to.equal("BODY");
            });
        });
    });

    describe("appendTo", () => {
        it("should return an error if the current context is not a browser", () => {
            global.window = null;

            appendTo(jsdom.window.document.body, jsdom.window.document.forms[0]).whenError(error => {
                expect(error).to.equal("Current context is not a browser");
            });

            global.window = jsdom.window;
        });

        it("should return an error if the first argument is not an Element", () => {
            appendTo(123, jsdom.window.document.forms[0]).whenError(error => {
                expect(error).to.equal("parent is not an Element in appendTo(parent, child), received 123");
            });
        });

        it("should return an error if the second argument is not an Element", () => {
            appendTo(jsdom.window.document.body, 123).whenError(error => {
                expect(error).to.equal("child is not an Element in appendTo(parent, child), received 123");
            });
        });

        it("should append a child and return the parent", () => {
            appendTo(jsdom.window.document.body, jsdom.window.document.forms[0]).whenOk(form => {
                expect(form.nodeName).to.equal("FORM");
            });
        });
    });

    describe("createElement", () => {
        it("should return an error if the current context is not a browser", () => {
            global.window = null;

            createElement("div").whenError(error => {
                expect(error).to.equal("Current context is not a browser");
            });

            global.window = jsdom.window;
        });

        it("should return an error if the first argument is not a string", () => {
            createElement(123).whenError(error => {
                expect(error).to.equal("name is not a string in createElement(name), received 123");
            });
        });

        it("should create an element and return the latter", () => {
            createElement("div").whenOk(div => {
                expect(div.nodeName).to.equal("DIV");
            });
        });
    });
});