export const copy = text => {
    return new Promise((resolve, reject) => {
        if (typeof text !== "string") {
            return reject(new Error(`text is not a stringin copy(text), received ${JSON.stringify(text)}`));
        }

        navigator.clipboard.writeText(text).then(resolve).catch(reject);
    });
};