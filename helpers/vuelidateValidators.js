export const upCaseRule = (value) => /[A-Z]/.test(value);

export const lowCaseRule = (value) => /[a-z]/.test(value);

export const specCharRule = (value) =>
  /[!@#$%^&*()_+{}\[\]:;<>,.?~\\\/\-]/.test(value);
