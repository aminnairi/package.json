export const curry = (callback, ...initialArguments) => {
    return (...additionalArguments) => {
        const allArguments = [...initialArguments, ...additionalArguments];

        if (allArguments.length >= callback.length) {
            return callback(...allArguments);
        }

        return curry(callback, ...allArguments);
    };
};