import { range } from "@helpers/utils";

const availableBsSizes = ["sm", "md", "lg", "xl"];

const alignContentValues = [
    "start",
    "center",
    "end",
    "around",
    "between",
    "stretch",
];

const alignHValues = ["start", "center", "end", "between"];

const alignVValues = ["start", "center", "end", "baseline", "stretch"];

const getAlignClass = (value, alignPrefix) => {
    if (!value) return "";
    return `${alignPrefix}-${value}`;
};

const getColsClass = (value, size, prefix, isPlural = true) => {
    if (!value) return;
    const name = isPlural ? "cols" : "col";
    return `${prefix ? `${prefix}-` : ""}${name}${
        size ? `-${size}` : ""
    }-${value}`;
};

const getPropBasedClass = (value, name, size) => {
    if (!value) return;
    return `${name}${size ? `-${size}` : ""}-${value}`;
};

const getOffsetClass = (value, size) => {
    return getPropBasedClass(value, "offset", size);
};

const getOrderClass = (value, size) => {
    return getPropBasedClass(value, "order", size);
};

const colsValues = range(12);

const rowColsValues = range(6);

const autoColsValues = colsValues.concat("auto");

const colsValidator = (v) => colsValues.includes(Number(v)) || v === undefined;

const rowColsValidator = (v) =>
    rowColsValues.includes(Number(v)) || v === undefined;

const autoColsValidator = (v) =>
    colsValues.includes(Number(v)) || "auto" === v || v === undefined;

const roundedBs = ["top", "right", "bottom", "left", "circle"];

const targetAttributes = ["_blank", "_self", "_parent", "_top", "framename"];

const navTypeValues = ["tabs", "pills"];

const positions = ["left", "top", "right", "bottom"];

export {
    availableBsSizes,
    alignContentValues,
    alignHValues,
    alignVValues,
    getAlignClass,
    getColsClass,
    colsValues,
    getPropBasedClass,
    getOffsetClass,
    getOrderClass,
    roundedBs,
    targetAttributes,
    navTypeValues,
    autoColsValidator,
    autoColsValues,
    rowColsValidator,
    rowColsValues,
    positions,
    // eslint-disable-next-line comma-dangle
    colsValidator,
};
