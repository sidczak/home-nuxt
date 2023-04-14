<template lang="pug">
    li(role='presentation')
        component.dropdown-header(:is='tag' :id='id' :class='computedColor')
            slot
</template>

<script>
// import { colorValidator } from '@helpers/exportedColors';

export default {
    props: {
        id: {
            type: String,
            default: null,
        },
        tag: {
            type: String,
            default: "header",
        },
        color: {
            type: String,
            default: null,
            // validator: colorValidator,
        },
    },
    computed: {
        computedColor() {
            return this.color ? `text-${this.color}` : "";
        },
    },
};
</script>
