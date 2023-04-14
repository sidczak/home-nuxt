export function isEmail(email) {
    const re = /^\w+([-.+]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;

    return re.test(String(email).toLowerCase());
}

export function isButtonColorValid(name, colors) {
    return (
        colors.includes(name) ||
        colors.includes(`dark-mode-${name}`) ||
        colors.includes(`light-mode-${name}`) ||
        "link" === name
    );
}
