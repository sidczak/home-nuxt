<template lang="pug">
.d-flex.flex-column.h-100(v-if="!$colorMode.unknown")
    header
        Navbar
    template(v-if="!manySections")
        main.h-100.flex-shrink-0
            Nuxt
        footer.mt-auto.py-5
            Footer
    template(v-else)
        Nuxt
</template>

<script>
const PAGES_WITH_MANY_SECTIONS = {
    '/landing': '/landing'
}
export default {
    computed: {
        manySections() {
            return PAGES_WITH_MANY_SECTIONS[this.$route.path] ? true : false
        },
    },
};
</script>
