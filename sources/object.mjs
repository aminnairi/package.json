import {ok, error} from "./result.mjs";
import {curry} from "./functional.mjs";

export const objectPropertySet = curry((target, paths, value) => {
    if (!Array.isArray(paths)) {
        return error(`paths is not an array in objectPropertySet(paths, value, target), received ${JSON.stringify(paths)}`);
    }

    if (paths.some(path => typeof path !== "string")) {
        return error(`paths does not contain only strings in objectPropertySet(paths, value, target), received ${JSON.stringify(paths)}`);
    }

    if (typeof target !== "object") {
        return error(`target is not an object in objectPropertySet(paths, value, target), received ${JSON.stringify(target)}`);
    }

    if (paths.length === 0) {
        return ok(target);
    }

    const [path, ...remainingPaths] = paths;

    if (target[path] === undefined) {
        return error(`cannot find path ${path} in ${JSON.stringify(target)}`);
    }

    if (remainingPaths.length > 0) {
        objectPropertySet(target[path], remainingPaths, value);
        return ok(target);
    }

    target[path] = value;

    return ok(target);
});

export const objectEmpty = (target) => {
    if (typeof target !== "object") {
        return error(`target is not an object in objectEmpty(target), received ${JSON.stringify(target)}`);
    }

    Object.keys(target).forEach(key => {
        const targetValue = target[key];
        const targetValueType = typeof targetValue;

        if (targetValueType === "string") {
            target[key] = "";
        }

        if (targetValueType === "boolean") {
            target[key] = false;
        }

        if (targetValueType === "number") {
            target[key] = 0;
        }

        if (Array.isArray(targetValueType)) {
            target[key] = [];
        }

        if (targetValueType === "object") {
            objectEmpty(target[key]);
        }
    });

    return ok(target);
};

export const objectLean = target => {
    return Object.entries(target).reduce((oldTarget, [key, value]) => {
        const valueType = Object.prototype.toString.call(value);

        if (valueType === "[object Object]") {
            const leaned = objectLean(value);

            if (Object.keys(leaned).length === 0) {
                return oldTarget;
            }

            return {...oldTarget, [key]: leaned};
        }

        if (valueType === "[object Array]") {
            const leaned = value.map(item => item.trim()).filter(Boolean);

            if (leaned.length === 0) {
                return oldTarget;
            }

            return {...oldTarget, [key]: leaned};
        }

        if (valueType === "[object String]" && value.trim().length === 0) {
            return oldTarget;
        }

        return {...oldTarget, [key]: value};
    }, {});
};