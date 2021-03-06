import {ok, error} from "./result.js";
import {typeOf} from "./type.js";

export const removeTrailingLeadingSpaces = text => {
    if (typeOf(text) !== "String") {
        return error(`text is not a string in removeTrailingLeadingSpaces(text), received ${JSON.stringify(text)}`);
    }

    return ok(text.trim());
};

export const toList = text => {
    if (typeOf(text) !== "String") {
        return error(`text is not a string in toList(text), received ${JSON.stringify(text)}`);
    }

    return ok(text.split(",").map(part => part.trim()).filter(Boolean));
};