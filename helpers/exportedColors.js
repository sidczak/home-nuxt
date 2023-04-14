import colors from "@exports/colors.scss";

export const colorsNames = Object.keys(colors);

export const modeColorsNames = colorsNames
    .filter((color) => /dark-mode/.test(color))
    .map((color) => color.replace(/dark-mode-/, ""));

export const colorValidator = (value) =>
    colorsNames.includes(value) || null === value;

export const modeColorValidator = (value) =>
    modeColorsNames.includes(value) || null === value;
