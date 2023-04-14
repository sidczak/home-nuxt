<template lang="pug">
    li(role='presentation')
        component.dropdown-text(:is='tag' :class='computedColor')
            slot
</template>

<script>
import { colorValidator } from "@helpers/exportedColors";

export default {
    props: {
        tag: {
            type: String,
            default: "p",
        },
        color: {
            type: String,
            default: null,
            validator: colorValidator,
        },
    },
    computed: {
        computedColor() {
            return this.color ? `text-${this.color}` : "";
        },
    },
};
</script>
<style lang="scss" scoped>
.dropdown-text {
    display: inline-block;
    padding: 0.25rem 1.5rem;
    margin-bottom: 0;
    width: 100%;
    clear: both;
    font-weight: lighter;
}
</style>
