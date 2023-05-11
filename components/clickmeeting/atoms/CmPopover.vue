<template lang="pug">
    .popover(v-if="isOpen" :class="computedPlacement" ref="popover")
        slot(name='title')
            h3.popover-header {{ title }}
        .popover-body
            slot
</template>

<script>
export default {
    props: {
        target: {
            type: String,
            default: "",
        },
        placement: {
            type: String,
            default: "right",
            validator: (v) =>
                ["top", "right", "bottom", "left", "auto"].includes(v),
        },
        triggers: {
            type: String,
            default: "hover",
            validator: (v) => ["click", "hover"].includes(v),
        },
        title: {
            type: String,
            default: "",
        },
    },
    data() {
        return {
            isOpen: false,
        };
    },
    computed: {
        computedPlacement() {
            return `popover-${this.placement}`;
        },
    },
    watch: {
        isOpen: {
            immediate: true,
            handler(value) {
                if (value) {
                    this.$nextTick(this.positionPopover);
                }
            },
        },
    },
    mounted() {
        if (this.triggers === "click" && this.target) {
            const targetElement = document.getElementById(this.target);
            if (targetElement) {
                targetElement.addEventListener("click", this.toggle);
            }
        }
        if (this.triggers === "hover" && this.target) {
            const targetElement = document.getElementById(this.target);
            if (targetElement) {
                targetElement.addEventListener("mouseenter", this.show);
                targetElement.addEventListener("mouseleave", this.hide);
            }
        }
        document.body.appendChild(this.$el);
        window.addEventListener("resize", this.positionPopover);
    },
    beforeDestroy() {
        if (this.triggers === "click" && this.target) {
            const targetElement = document.getElementById(this.target);
            if (targetElement) {
                targetElement.removeEventListener("click", this.toggle);
            }
        }
        if (this.triggers === "hover" && this.target) {
            const targetElement = document.getElementById(this.target);
            if (targetElement) {
                targetElement.removeEventListener("mouseenter", this.show);
                targetElement.removeEventListener("mouseleave", this.hide);
            }
        }
        if (this.$el.parentNode) {
            this.$el.parentNode.removeChild(this.$el);
        }
        window.removeEventListener("resize", this.positionPopover);
    },
    methods: {
        toggle() {
            this.isOpen = !this.isOpen;
        },
        show() {
            this.isOpen = true;
        },
        hide() {
            this.isOpen = false;
        },
        positionPopover() {
            const popover = this.$refs.popover;
            const targetElement = document.getElementById(this.target);

            if (!popover || !targetElement) return;

            const popoverRect = popover.getBoundingClientRect();
            const targetRect = targetElement.getBoundingClientRect();

            let top, left;

            if (this.placement === "top") {
                const fitsOnTop = targetRect.top - popoverRect.height > 0;
                if (fitsOnTop) {
                    top = targetRect.top - popoverRect.height - 5;
                    left =
                        targetRect.left +
                        (targetRect.width - popoverRect.width) / 2;
                } else {
                    top = targetRect.bottom + 5;
                    left =
                        targetRect.left +
                        (targetRect.width - popoverRect.width) / 2;
                }
            } else if (this.placement === "right") {
                const viewportWidth =
                    window.innerWidth || document.documentElement.clientWidth;

                const fitsOnRight =
                    targetRect.right + popoverRect.width < viewportWidth;

                if (fitsOnRight) {
                    top =
                        targetRect.top +
                        (targetRect.height - popoverRect.height) / 2;
                    left = targetRect.right + 5;
                } else {
                    top =
                        targetRect.top +
                        (targetRect.height - popoverRect.height) / 2;
                    left = targetRect.left - popoverRect.width - 5;
                }
            } else if (this.placement === "bottom") {
                const viewportHeight =
                    window.innerHeight || document.documentElement.clientHeight;

                const fitsOnBottom =
                    targetRect.bottom + popoverRect.height < viewportHeight;

                if (fitsOnBottom) {
                    top = targetRect.bottom + 5;
                    left =
                        targetRect.left +
                        (targetRect.width - popoverRect.width) / 2;
                } else {
                    top = targetRect.top - popoverRect.height - 5;
                    left =
                        targetRect.left +
                        (targetRect.width - popoverRect.width) / 2;
                }
            } else if (this.placement === "left") {
                const fitsOnLeft = targetRect.left - popoverRect.width > 0;
                if (fitsOnLeft) {
                    top =
                        targetRect.top +
                        (targetRect.height - popoverRect.height) / 2;
                    left = targetRect.left - popoverRect.width - 5;
                } else {
                    top =
                        targetRect.top +
                        (targetRect.height - popoverRect.height) / 2;
                    left = targetRect.right + 5;
                }
            } else if (this.placement === "auto") {
                const viewportWidth =
                    window.innerWidth || document.documentElement.clientWidth;
                const viewportHeight =
                    window.innerHeight || document.documentElement.clientHeight;

                const fitsOnTop = targetRect.top - popoverRect.height > 0;
                const fitsOnRight =
                    targetRect.right + popoverRect.width < viewportWidth;
                const fitsOnBottom =
                    targetRect.bottom + popoverRect.height < viewportHeight;
                const fitsOnLeft = targetRect.left - popoverRect.width > 0;

                if (fitsOnTop) {
                    top = targetRect.top - popoverRect.height - 5;
                    left =
                        targetRect.left +
                        (targetRect.width - popoverRect.width) / 2;
                } else if (fitsOnRight) {
                    top =
                        targetRect.top +
                        (targetRect.height - popoverRect.height) / 2;
                    left = targetRect.right + 5;
                } else if (fitsOnBottom) {
                    top = targetRect.bottom + 5;
                    left =
                        targetRect.left +
                        (targetRect.width - popoverRect.width) / 2;
                } else if (fitsOnLeft) {
                    top =
                        targetRect.top +
                        (targetRect.height - popoverRect.height) / 2;
                    left = targetRect.left - popoverRect.width - 5;
                } else {
                    top =
                        targetRect.top +
                        (targetRect.height - popoverRect.height) / 2;
                    left =
                        targetRect.left +
                        targetRect.width / 2 -
                        popoverRect.width / 2;
                }
            }

            popover.style.top = `${top}px`;
            popover.style.left = `${left}px`;
        },
    },
};
</script>
