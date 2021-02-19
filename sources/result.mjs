export const error = (value) => ({
    andThen: () => error(value),
    whenError: callback => (callback(value), error(value)),
    whenOk: () => error(value)
});

export const ok = value => ({
    andThen: update => update(value),
    whenOk: callback => (callback(value), ok(value)),
    whenError: () => ok(value)
});