/**
 * Copy a text to the system clipboard
 * @param {string} text Text to copy to the system clipboard
 * @return {Promise<void>}
 */
export const copy = text => {
    return new Promise((resolve, reject) => {
        if (typeof text !== "string") {
            return reject(new Error(`text is not a stringin copy(text), received ${JSON.stringify(text)}`));
        }

        navigator.clipboard.writeText(text).then(resolve).catch(reject);
    });
};