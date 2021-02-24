import {ok, error} from "./result.js";
import {curry} from "./functional.js";
import {typeOf} from "./type.js";

export const objectPropertySet = curry((target, paths, value) => {
    if (typeOf(target) !== "Object") {
        return error(`target is not an object in objectPropertySet(paths, value, target), received ${JSON.stringify(target)}`);
    }

    if (typeOf(paths) !== "Array") {
        return error(`paths is not an array in objectPropertySet(paths, value, target), received ${JSON.stringify(paths)}`);
    }

    if (paths.some(path => typeOf(path) !== "String")) {
        return error(`paths does not contain only strings in objectPropertySet(paths, value, target), received ${JSON.stringify(paths)}`);
    }

    if (paths.length === 0) {
        return ok(target);
    }

    const [path, ...remainingPaths] = paths;

    if (remainingPaths.length !== 0) {
        if (target[path] === undefined) {
            target[path] = {};
        }

        objectPropertySet(target[path], remainingPaths, value);
    } else {
        target[path] = value;
    }

    return ok(target);
});

export const objectEmpty = target => {
    if (typeOf(target) !== "Object") {
        return error(`target is not an object in objectEmpty(target), received ${JSON.stringify(target)}`);
    }

    Object.keys(target).forEach(key => {
        const targetValue = target[key];
        const targetValueType = typeOf(targetValue);

        if (targetValueType === "String") {
            target[key] = "";
        }

        if (targetValueType === "Boolean") {
            target[key] = false;
        }

        if (targetValueType === "Number") {
            target[key] = 0;
        }

        if (targetValueType === "Array") {
            target[key] = [];
        }

        if (targetValueType === "Object") {
            objectEmpty(target[key]);
        }
    });

    return ok(target);
};

export const objectLean = target => {
    if (typeOf(target) !== "Object") {
        return error(`target is not an object in objectLean(target), received ${JSON.stringify(target)}`);
    }

    return ok(Object.entries(target).reduce((oldTarget, [key, value]) => {
        const valueType = typeOf(value);

        if (valueType === "Object") {
            const leaned = objectLean(value).withDefault({});

            if (Object.keys(leaned).length === 0) {
                return oldTarget;
            }

            return {...oldTarget, [key]: leaned};
        }

        if (valueType === "Array") {
            const leaned = value.map(item => item.trim()).filter(Boolean);

            if (leaned.length === 0) {
                return oldTarget;
            }

            return {...oldTarget, [key]: leaned};
        }

        if (valueType === "String" && value.trim().length === 0) {
            return oldTarget;
        }

        return {...oldTarget, [key]: value};
    }, {}));
};