import { createSimpleFunctionalComponent } from "@helpers/componentsUtils";

// import Vue from "vue";

// const mergeClasses = (a, b) => {
//     return `${a || ""} ${b || ""}`.trim();
// };

// const createSimpleFunctionalComponent = (
//     name,
//     { defaultTag = "div", classes = "" } = {}
// ) => {
//     return Vue.extend({
//         name,

//         functional: true,

//         props: {
//             tag: {
//                 type: String,
//                 default: defaultTag,
//             },
//         },

//         render(h, { data, props, children }) {
//             data.staticClass = mergeClasses(classes, data.staticClass);

//             return h(props.tag, data, children);
//         },
//     });
// };

export const CARD_HEADER_CLASS = "card-header";
export const CARD_HEADER_DEFAULT_TAG = "header";

export default createSimpleFunctionalComponent("CmCardHeader", {
    defaultTag: CARD_HEADER_DEFAULT_TAG,
    classes: CARD_HEADER_CLASS,
});
