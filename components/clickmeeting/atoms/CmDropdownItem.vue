<template lang="pug">
    li(role='presentation' v-on='$listeners')
        CmLink.dropdown-item(
            :disabled='disabled'
            :href='href'
            role='menuitem'
            :target='target'
            :active='active'
            :class='computedColor'
        )
            slot
</template>

<script>
import CmLink from "./CmLink";
// import { targetAttributes } from '@helpers/componentsUtils';
// import { colorValidator } from '@helpers/exportedColors';

export default {
    components: {
        CmLink,
    },
    props: {
        href: {
            type: String,
            default: null,
        },
        target: {
            type: String,
            default: "_self",
            // validator: (value) => targetAttributes.includes(value),
        },
        active: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
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
