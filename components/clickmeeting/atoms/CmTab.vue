<template lang="pug">
    li.nav-item(role='presentation')
        a.nav-link(
            :aria-disabled='ariaDisabled'
            href='#'
            role='tab'
            :class='{ active, disabled }'
            target='_self'
            :tabindex='tabindex'
            @click='$emit("clickTab")'
        )
            slot(name='title')
                | {{ title }}
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: null,
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
            return this.active ? undefined : -1;
        },
    },
};
</script>
