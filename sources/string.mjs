import {ok, error} from "./result.mjs";

export const removeTrailingLeadingSpaces = text => {
    if (typeof text !== "string") {
        return error(`text is not a string in removeTrailingLeadingSpaces(text), received ${JSON.stringify(text)}`);
    }

    return ok(text.trim());
}

export const toList = text => {
    if (typeof text !== "string") {
        return error(`text is not a string in toList(text), received ${JSON.stringify(text)}`);
    }

    return ok(text.split(",").map(part => part.trim()).filter(Boolean));
}