import Vue from "vue";

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

const typeAttributes = ["button", "submit", "reset"];

const targetAttributes = ["_blank", "_self", "_parent", "_top", "framename"];

const navTypeValues = ["tabs", "pills"];

const getNavTypeClass = (value, navTypePrefix) => {
    if (!value) return "";
    return `${navTypePrefix}-${value}`;
};

const buttonBsSizes = ["sm", "md", "lg"];

const svgAttributes = ["fill", "stroke"];

const positions = ["left", "top", "right", "bottom"];

const mergeClasses = (a, b) => {
    return `${a || ""} ${b || ""}`.trim();
};

const createSimpleFunctionalComponent = (
    name,
    { defaultTag = "div", classes = "" } = {}
) => {
    return Vue.extend({
        name,

        functional: true,

        props: {
            tag: {
                type: String,
                default: defaultTag,
            },
        },

        render(h, { data, props, children }) {
            data.staticClass = mergeClasses(classes, data.staticClass);

            return h(props.tag, data, children);
        },
    });
};

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
    getNavTypeClass,
    typeAttributes,
    autoColsValidator,
    autoColsValues,
    rowColsValidator,
    rowColsValues,
    buttonBsSizes,
    svgAttributes,
    positions,
    createSimpleFunctionalComponent,
    mergeClasses,
    // eslint-disable-next-line comma-dangle
    colsValidator,
};
