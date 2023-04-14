<template lang="pug">
    a(
        :aria-disabled='ariaDisabled'
        :href='href'
        :target='target'
        :class='{ active, disabled }'
        :tabindex='tabindex'
        v-on='$listeners'
    )
        slot
</template>

<script>
import { targetAttributes } from "@helpers/componentsUtils";
export default {
    name: "CmLink",
    props: {
        href: {
            type: String,
            default: `javascript:void(0);`,
        },
        target: {
            type: String,
            default: "_self",
            validator: (value) => targetAttributes.includes(value),
        },
        active: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        ariaDisabled() {
            return this.disabled ? true : undefined;
        },
        tabindex() {
            return this.disabled ? -1 : undefined;
        },
    },
};
</script>
<style lang="scss" scoped>
a.disabled {
    pointer-events: none;
}
.link {
    // color: $info;
    // font: 500 12px/12px $font-roboto;
    text: {
        align: center;
        shadow: none;
        transform: uppercase;
    }
    display: block;
    position: relative;
    &:hover {
        // color: $info;
        text-decoration: underline;
    }
}
</style>
