import {error, ok} from "./result.mjs";
import {curry} from "./functional.mjs";

export const createElement = (name) => {
    if (typeof name !== "string") {
        return error(`name is not a string in createElement(name), received ${JSON.stringify(name)}`);
    }

    const element = document.createElement(name);

    return ok(element);
};

export const getElementById = (identifier, element) => {
    if (typeof identifier !== "string") {
        return error(`identifier is not a string in getElementById(identifier, element), received ${JSON.stringify(identifier)}`);
    }

    if (!(element instanceof Document) && !(element instanceof Element)) {
        return error(`element is not an Element in getElementById(identifier, element), received ${JSON.stringify(element)}`);
    }

    if (typeof element.getElementById !== "function") {
        return error(`No getElementById method available on element in getElementById(identifier, element), received ${JSON.stringify(element)}`);
    }

    const foundElement = element.getElementById(identifier);

    if (foundElement) {
        return ok(foundElement);
    }

    return error(`No element with an id of ${JSON.stringify(identifier)} found in the element ${JSON.stringify(element)}`);
};

export const on = curry((event, callback, element) => {
    if (typeof event !== "string") {
        return error(`event is not a string in on(event, callback, element), received ${JSON.stringify(event)}`);
    }

    if (typeof callback !== "function") {
        return error(`callback is not a function in on(event, callback, element), received ${JSON.stringify(callback)}`);
    }

    if (!(element instanceof Document) && !(element instanceof Element)) {
        return error(`element is not an Element in getElementById(identifier, element), received ${JSON.stringify(element)}`);
    }

    element.addEventListener(event, callback);

    return ok(element);
});

export const getAttribute = curry((attribute, element) => {
    if (typeof attribute !== "string") {
        return error(`attribute is not a string in getAttribute(attribute, element), received, ${JSON.stringify(attribute)}`);
    }

    if (!(element instanceof Element)) {
        return error(`element is not an attribute in getAttribute(attribute, element), received, ${JSON.stringify(element)}`);
    }

    return ok(element[attribute]);
});

export const setAttribute = curry((attribute, value, element) => {
    if (typeof attribute !== "string") {
        return error(`attribute is not a string in setAttribute(attribute, value, element), received, ${JSON.stringify(attribute)}`);
    }

    if (typeof value !== "string") {
        return error(`value is not a string in setAttribute(attribute, value, element), received, ${JSON.stringify(value)}`);
    }

    if (!(element instanceof Element)) {
        return error(`element is not an attribute in setAttribute(attribute, value, element), received, ${JSON.stringify(element)}`);
    }

    element[attribute] = value;
    return ok(element);
});

export const reset = (formElement) => {
    if (!(formElement instanceof HTMLFormElement)) {
        return error(`formElement is not a HTMLFormElement in reset(formElement), received ${JSON.stringify(formElement)}`);
    }

    formElement.reset();

    return ok(formElement);
};

export const focus = element => {
    if (!(element instanceof Element)) {
        return error(`element is not a Element in focus(element), received ${JSON.stringify(element)}`);
    }

    element.focus();
    return ok(element);
};

export const click = element => {
    if (!(element instanceof Element)) {
        return error(`element is not a Element in focus(element), received ${JSON.stringify(element)}`);
    }

    element.click();
    return ok(element);
}

export const appendTo = curry((parent, children) => {
    if (!(parent instanceof Element)) {
        return error(`parent is not an Element in appendTo(parent, children), received ${JSON.stringify(parent)}`);
    }

    if (!(children instanceof Element)) {
        return error(`children is not an Element in appendTo(parent, children), received ${JSON.stringify(children)}`);
    }

    parent.appendChild(children);

    return ok(children);
});