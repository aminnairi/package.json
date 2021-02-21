/**
 * Copy a text to the system clipboard
 * @param {string} text Text to copy to the system clipboard
 * @return {Promise<void>}
 */
export const copy = text => {
    return new Promise((resolve, reject) => {
        if (!navigator) {
            reject(new Error("Current context is not a browser"));
        }

        if (!navigator.clipboard || !navigator.clipboard || typeof navigator.clipboard.writeText !== "function") {
            reject(new Error("Current context does not support the clipboard API"));
        }

        if (typeof text !== "string") {
            return reject(new Error(`text is not a string in copy(text), received ${JSON.stringify(text)}`));
        }

        const promise = navigator.clipboard.writeText(text);

        if (promise instanceof Promise) {
            return promise.then(resolve).catch(reject);
        }
        
        reject(new Error("Current context does not implement the clipboard API correctly"));
    });
};