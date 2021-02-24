import {error, ok} from "./result.js";
import {curry} from "./functional.js";
import {typeOf} from "./type.js";

export const createElement = name => {
    try {
        if (typeOf(name) !== "String") {
            return error(`name is not a string in createElement(name), received ${JSON.stringify(name)}`);
        }

        const element = window.document.createElement(name);
        return ok(element);
    } catch {
        return error("Current context is not a browser");
    }
};

export const getElementById = (identifier) => {
    try {
        if (typeOf(identifier) !== "String") {
            return error(`identifier is not a string in getElementById(identifier, element), received ${JSON.stringify(identifier)}`);
        }
    
        const foundElement = window.document.getElementById(identifier);

        if (foundElement) {
            return ok(foundElement);
        }

        return error(`No element with an id of ${JSON.stringify(identifier)} found in the DOM`);
    } catch {
        return error("Current context is not a browser");
    }
};

export const on = curry((event, callback, element) => {
    try {
        if (typeOf(event) !== "String") {
            return error(`event is not a string in on(event, callback, element), received ${JSON.stringify(event)}`);
        }

        if (typeOf(callback) !== "Function") {
            return error(`callback is not a synchronous function in on(event, callback, element), received ${JSON.stringify(callback)}`);
        }

        if (!(element instanceof window.Element)) {
            return error(`element is not an Element in on(event, callback, element), received ${JSON.stringify(element)}`);
        }

        element.addEventListener(event, callback);
        return ok(element);
    } catch {
        return error("Current context is not a browser");
    }
});

export const getAttribute = curry((attribute, element) => {
    try {
        if (typeOf(attribute) !== "String") {
            return error(`attribute is not a string in getAttribute(attribute, element), received, ${JSON.stringify(attribute)}`);
        }

        if (!(element instanceof window.Element)) {
            return error(`element is not an Element in getAttribute(attribute, element), received, ${JSON.stringify(element)}`);
        }

        return ok(element[attribute]);
    } catch {
        return error("Current context is not a browser");
    }
});

export const setAttribute = curry((attribute, value, element) => {
    try {
        if (typeOf(attribute) !== "String") {
            return error(`attribute is not a string in setAttribute(attribute, value, element), received, ${JSON.stringify(attribute)}`);
        }

        if (typeOf(value) !== "String") {
            return error(`value is not a string in setAttribute(attribute, value, element), received, ${JSON.stringify(value)}`);
        }

        if (!(element instanceof window.Element)) {
            return error(`element is not an Element in setAttribute(attribute, value, element), received, ${JSON.stringify(element)}`);
        }

        element[attribute] = value;
        return ok(element);
    } catch {
        return error("Current context is not a browser");
    }
});

export const reset = (formElement) => {
    try {
        if (!(formElement instanceof window.HTMLFormElement)) {
            return error(`formElement is not a HTMLFormElement in reset(formElement), received ${JSON.stringify(formElement)}`);
        }

        formElement.reset();
        return ok(formElement);
    } catch {
        return error("Current context is not a browser");
    }
};

export const focus = element => {
    try {
        if (!(element instanceof window.Element)) {
            return error(`element is not a Element in focus(element), received ${JSON.stringify(element)}`);
        }

        element.focus();
        return ok(element);
    } catch {
        return error("Current context is not a browser");
    }
};

export const click = element => {
    try {
        if (!(element instanceof window.Element)) {
            return error(`element is not a Element in click(element), received ${JSON.stringify(element)}`);
        }

        element.click();
        return ok(element);
    } catch {
        return error("Current context is not a browser");
    }
};

export const appendTo = curry((parent, child) => {
    try {
        if (!(parent instanceof window.Element)) {
            return error(`parent is not an Element in appendTo(parent, child), received ${JSON.stringify(parent)}`);
        }

        if (!(child instanceof window.Element)) {
            return error(`child is not an Element in appendTo(parent, child), received ${JSON.stringify(child)}`);
        }

        parent.appendChild(child);
        return ok(child);
    } catch {
        console.error(error.message);
        return error("Current context is not a browser");
    }
});