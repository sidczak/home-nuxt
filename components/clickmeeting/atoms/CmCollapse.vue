<template lang="pug">
    component.collapse(
        :is='tag'
        v-show='isVisible'
        :id='id'
        :class='{ show: isVisible, "navbar-collapse": isNav }'
    )
        slot
</template>

<script>
export default {
    model: {
        prop: "visible",
    },
    props: {
        id: {
            type: String,
            default: null,
        },
        tag: {
            type: String,
            default: "div",
        },
        visible: {
            type: Boolean,
            default: false,
        },
        isNav: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            isVisible: this.visible,
        };
    },
    watch: {
        visible(newValue) {
            this.initialVisible(newValue);
        },
    },
    methods: {
        initialVisible() {
            setTimeout(() => {
                this.isVisible = this.visible;
                this.$emit("input", this.isVisible);
            }, 350);
        },
    },
};
</script>
