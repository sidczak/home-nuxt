<template lang="pug">
    .popover(v-if="isOpen" ref="popover")
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
        window.addEventListener("click", this.handleOutsideClick);
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
        window.removeEventListener("click", this.handleOutsideClick);
    },
    methods: {
        handleOutsideClick(event) {
            const popover = this.$refs.popover;
            const targetElement = document.getElementById(this.target);

            if (
                popover &&
                targetElement &&
                !popover.contains(event.target) &&
                !targetElement.contains(event.target)
            ) {
                this.hide();
            }
        },
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

            let top, left;

            const calculateHorizontalCenter = () => {
                return (
                    targetRect.left + (targetRect.width - popoverRect.width) / 2
                );
            };

            const calculateVerticalCenter = () => {
                return (
                    targetRect.top +
                    (targetRect.height - popoverRect.height) / 2
                );
            };

            let placement;

            if (this.placement === "auto") {
                if (fitsOnTop) placement = "top";
                else if (fitsOnRight) placement = "right";
                else if (fitsOnBottom) placement = "bottom";
                else if (fitsOnLeft) placement = "left";
            } else {
                placement = this.placement;
            }

            switch (placement) {
                case "top":
                    top = fitsOnTop
                        ? targetRect.top - popoverRect.height - 5
                        : targetRect.bottom + 5;
                    left = calculateHorizontalCenter();
                    break;
                case "right":
                    top = calculateVerticalCenter();
                    left = fitsOnRight
                        ? targetRect.right + 5
                        : targetRect.left - popoverRect.width - 5;
                    break;
                case "bottom":
                    top = fitsOnBottom
                        ? targetRect.bottom + 5
                        : targetRect.top - popoverRect.height - 5;
                    left = calculateHorizontalCenter();
                    break;
                case "left":
                    top = calculateVerticalCenter();
                    left = fitsOnLeft
                        ? targetRect.left - popoverRect.width - 5
                        : targetRect.right + 5;
                    break;
                default:
                    top =
                        targetRect.top +
                        (targetRect.height - popoverRect.height) / 2;
                    left =
                        targetRect.left +
                        targetRect.width / 2 -
                        popoverRect.width / 2;
                    break;
            }

            if (top < 0) {
                top = 5;
            } else if (top + popoverRect.height > viewportHeight) {
                top = viewportHeight - popoverRect.height - 5;
            }

            if (left < 0) {
                left = 5;
            } else if (left + popoverRect.width > viewportWidth) {
                left = viewportWidth - popoverRect.width - 5;
            }

            // const adjustedPosition = this.adjustPopoverPosition(
            //     top,
            //     left,
            //     popoverRect,
            //     viewportWidth,
            //     viewportHeight
            // );

            // top = adjustedPosition.top;
            // left = adjustedPosition.left;

            popover.style.top = `${top}px`;
            popover.style.left = `${left}px`;
        },

        // adjustPopoverPosition(
        //     top,
        //     left,
        //     popoverRect,
        //     viewportWidth,
        //     viewportHeight
        // ) {
        //     if (top < 0) {
        //         top = 5;
        //     } else if (top + popoverRect.height > viewportHeight) {
        //         top = viewportHeight - popoverRect.height - 5;
        //     }

        //     if (left < 0) {
        //         left = 5;
        //     } else if (left + popoverRect.width > viewportWidth) {
        //         left = viewportWidth - popoverRect.width - 5;
        //     }

        //     return { top, left };
        // },
    },
};
</script>
