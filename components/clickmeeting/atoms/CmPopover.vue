<template lang="pug">
    div(v-if="isOpen" class="popover" :class="placementClass")
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
            default: "top",
        },
        triggers: {
            type: String,
            default: "hover",
        },
        title: {
            type: String,
            default: "",
        },
    },
    data() {
        return {
            isOpen: false,
            placementClass: "",
        };
    },
    mounted() {
        this.setPlacementClass();
        if (this.triggers === "click" && this.target) {
            document
                .getElementById(this.target)
                .addEventListener("click", this.toggle);
        }
        if (this.triggers === "hover" && this.target) {
            document
                .getElementById(this.target)
                .addEventListener("mouseenter", this.show);
            document
                .getElementById(this.target)
                .addEventListener("mouseleave", this.hide);
        }
        document.body.appendChild(this.$el);
    },
    beforeDestroy() {
        if (this.triggers === "click" && this.target) {
            document
                .getElementById(this.target)
                .removeEventListener("click", this.toggle);
        }
        if (this.triggers === "hover" && this.target) {
            document
                .getElementById(this.target)
                .removeEventListener("mouseenter", this.show);
            document
                .getElementById(this.target)
                .removeEventListener("mouseleave", this.hide);
        }
        document.body.removeChild(this.$el);
    },
    methods: {
        setPlacementClass() {
            this.placementClass = `popover-${this.placement}`;
        },
        showPopover(value) {
            this.isOpen = value;
            // setTimeout(
            //   () => {
            //     this.modalVisible = value;
            //   },
            //   value ? 0 : 600
            // );
            // setTimeout(() => {
            //   this.modalContentVisible = value;
            // }, 300);
            // this.$emit("input", value);
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
    },
};
</script>

<style>
/*.popover {
    position: absolute;
    z-index: 1000;
    display: block;
    width: 200px;
    background-color: white;
    border: 1px solid gray;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    padding: 10px;
}

.popover-header {
    font-weight: bold;
    margin-bottom: 5px;
}*/
/*
.popover-top {
    bottom: 100%;
}

.popover-bottom {
    top: 100%;
}

.popover-left {
    right: 100%;
}

.popover-right {
    left: 100%;
}*/
</style>
