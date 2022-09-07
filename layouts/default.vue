<template lang="pug">
.d-flex.flex-column.h-100(v-if="!$colorMode.unknown")
    header
        Navbar
    template(v-if="!manySections")
        main.h-100(:class="flexShrink")
            Nuxt
        footer.mt-auto.py-5
            Footer
    template(v-else)
        main.h-100(:class="flexShrink")
            Nuxt
</template>

<script>
const PAGES_WITH_MANY_SECTIONS = {
    '/landing': '/landing'
}
const PAGES_WITHOUT_FLEX_SHRINK = {
    '/landing': '/landing'
}
export default {
    computed: {
        manySections() {
            return PAGES_WITH_MANY_SECTIONS[this.$route.path] ? true : false
        },
        flexShrink(){
            return PAGES_WITHOUT_FLEX_SHRINK[this.$route.path] ? false : 'flex-shrink-0'
        }
    },
};
</script>
