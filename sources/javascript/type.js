export const typeOf = something => {
    return Object.prototype.toString.call(something).replace("[object ", "").replace("]", "");
};