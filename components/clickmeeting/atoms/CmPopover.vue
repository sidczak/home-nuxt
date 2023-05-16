<template lang="pug">
    .popover(v-if='isOpen' ref='popover')
        slot(name='title')
            h3.popover-header {{ popoverTitle }}
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
        trigger: {
            type: String,
            default: "hover",
            validator: (v) => ["click", "hover"].includes(v),
        },
        popoverTitle: {
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
        if ("click" === this.trigger && this.target) {
            const targetElement = document.getElementById(this.target);
            if (targetElement) {
                targetElement.addEventListener("click", this.toggle);
            }
        }
        if ("hover" === this.trigger && this.target) {
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
        if ("click" === this.trigger && this.target) {
            const targetElement = document.getElementById(this.target);
            if (targetElement) {
                targetElement.removeEventListener("click", this.toggle);
            }
        }
        if ("hover" === this.trigger && this.target) {
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

            const fitsOnTop = 0 < targetRect.top - popoverRect.height;
            const fitsOnRight =
                targetRect.right + popoverRect.width < viewportWidth;
            const fitsOnBottom =
                targetRect.bottom + popoverRect.height < viewportHeight;
            const fitsOnLeft = 0 < targetRect.left - popoverRect.width;

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

            // let placement;

            // if ('auto' === this.placement) {
            //     if (fitsOnTop) placement = 'top';
            //     else if (fitsOnRight) placement = 'right';
            //     else if (fitsOnBottom) placement = 'bottom';
            //     else if (fitsOnLeft) placement = 'left';
            // } else {
            //     placement = this.placement;
            // }

            const placement = this.calculatePlacement(
                fitsOnTop,
                fitsOnRight,
                fitsOnBottom,
                fitsOnLeft
            );

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

            // if (0 > top) {
            //     top = 5;
            // } else if (top + popoverRect.height > viewportHeight) {
            //     top = viewportHeight - popoverRect.height - 5;
            // }

            // if (0 > left) {
            //     left = 5;
            // } else if (left + popoverRect.width > viewportWidth) {
            //     left = viewportWidth - popoverRect.width - 5;
            // }

            const adjustedPosition = this.adjustPopoverPosition(
                top,
                left,
                popoverRect,
                viewportWidth,
                viewportHeight
            );

            top = adjustedPosition.top;
            left = adjustedPosition.left;

            popover.style.top = `${top}px`;
            popover.style.left = `${left}px`;
        },
        calculatePlacement(fitsOnTop, fitsOnRight, fitsOnBottom, fitsOnLeft) {
            let placement;

            if ("auto" === this.placement) {
                if (fitsOnTop) placement = "top";
                else if (fitsOnRight) placement = "right";
                else if (fitsOnBottom) placement = "bottom";
                else if (fitsOnLeft) placement = "left";
            } else {
                placement = this.placement;
            }

            return placement;
        },
        adjustPopoverPosition(
            top,
            left,
            popoverRect,
            viewportWidth,
            viewportHeight
        ) {
            if (0 > top) {
                top = 5;
            } else if (top + popoverRect.height > viewportHeight) {
                top = viewportHeight - popoverRect.height - 5;
            }

            if (0 > left) {
                left = 5;
            } else if (left + popoverRect.width > viewportWidth) {
                left = viewportWidth - popoverRect.width - 5;
            }

            return { top, left };
        },
    },
};
</script>
