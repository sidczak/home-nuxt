<script>
import { DEFAULT_CLOSE_DELAY, DEFAULT_POSITION } from "@directives/CmTooltip";
import { positions } from "@helpers/componentsUtils";

export default {
    props: {
        closeDelay: {
            type: Number,
            default: DEFAULT_CLOSE_DELAY,
        },
        position: {
            type: String,
            default: DEFAULT_POSITION,
            validator: (v) => positions.includes(v),
        },
        content: {
            type: String,
            default: "",
        },
    },
    data() {
        return {
            preparedContent: "",
        };
    },
    updated() {
        this.setTooltipHtml();
    },
    mounted() {
        this.setTooltipHtml();
    },
    methods: {
        getTooltipId() {
            return this.$el.querySelector("[data-tooltip-id]")?.dataset
                ?.tooltipId;
        },
        setSlotTooltipHtml() {
            const tooltipId = this.getTooltipId();
            document
                .querySelector(
                    `.tooltip[data-tooltip-id="${tooltipId}"] .tooltip-inner`
                )
                .appendChild(this.defaultSlot.elm);
        },
        setTooltipHtml() {
            if (this.defaultSlot) {
                this.setSlotTooltipHtml();
            }
        },
    },
    render(h) {
        const activatorSlotContent = this.$scopedSlots?.activator?.()[0];
        if (!activatorSlotContent && "production" !== process.env.NODE_ENV) {
            console.error(
                "Tooltip activator is required. Please provide it via slot"
            );
            return;
        }
        if (!activatorSlotContent.data) {
            activatorSlotContent.data = {};
        }
        activatorSlotContent.data.directives =
            activatorSlotContent.data.directives || [];
        const hasContent = !!(
            this.content || this.$scopedSlots?.default?.()[0]
        );
        this.defaultSlot = this.$scopedSlots?.default?.()[0];
        if (hasContent) {
            activatorSlotContent.data.directives.push({
                name: "cm-tooltip",
                value: {
                    content: this.defaultSlot
                        ? this.preparedContent
                        : this.content,
                    closeDelay: this.closeDelay,
                    position: this.position,
                },
            });
            if (this.defaultSlot) {
                return h(
                    "div",
                    {
                        staticClass: "tooltip__wrapper",
                    },
                    [activatorSlotContent, this.defaultSlot]
                );
            }
            return activatorSlotContent;
        }
        if ("production" !== process.env.NODE_ENV) {
            console.error(
                "Tooltip content is required. Please provide it as prop or slot"
            );
        }
        return activatorSlotContent;
    },
};
</script>
