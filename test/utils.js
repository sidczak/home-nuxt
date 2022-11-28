export const getTree = (html, otherAttrs = {}) => {
    return { $el: html, ...otherAttrs };
};

export const awaitNTimes = async (n, wrapper) => {
    await wrapper.vm.$nextTick();
    if (0 < n - 1) {
        await awaitNTimes(n - 1, wrapper);
    }
};
