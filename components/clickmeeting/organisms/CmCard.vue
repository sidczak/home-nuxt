<script>
import CmCardBody from "@components/clickmeeting/atoms/CmCardBody";
import CmCardFooter from "@components/clickmeeting/atoms/CmCardFooter";
import CmCardHeader from "@components/clickmeeting/atoms/CmCardHeader";
import { mergeClasses } from "@helpers/componentsUtils";
import { isFunction } from "@helpers/utils";

const getHeader = (h, slot, scopedSlot, headerProp) => {
    if (!headerProp && !slot && !scopedSlot) return "";
    return h(
        CmCardHeader,
        isFunction(scopedSlot) ? scopedSlot() : slot || headerProp
    );
};

const getBody = (h, slot, scopedSlot, noBody) => {
    if (!scopedSlot && !slot) return "";
    if (noBody) return scopedSlot() || slot;
    return h(CmCardBody, isFunction(scopedSlot) ? scopedSlot() : slot);
};

const getFooter = (h, slot, scopedSlot) => {
    if (!scopedSlot && !slot) return "";
    return h(CmCardFooter, isFunction(scopedSlot) ? scopedSlot() : slot);
};

export default {
    name: "CmCard",
    functional: true,
    props: {
        tag: {
            type: String,
            default: "div",
        },
        header: {
            type: String,
            default: "",
        },
        noBody: {
            type: Boolean,
            default: false,
        },
    },
    render(h, { props, slots, scopedSlots, data }) {
        const $header = getHeader(
            h,
            slots.header,
            scopedSlots.header,
            props.header
        );
        const $body = getBody(
            h,
            slots.default,
            scopedSlots.default,
            props.noBody
        );
        const $footer = getFooter(h, slots.footer, scopedSlots.footer);
        data.staticClass = mergeClasses("card", data.staticClass);

        return h(props.tag, data, [$header, $body, $footer]);
    },
};
</script>
