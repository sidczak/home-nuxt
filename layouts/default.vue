<template lang="pug">
.d-flex.flex-column.h-100(v-if="!$colorMode.unknown")
    header
        Navbar
    Nuxt
</template>

<script>
// const PAGES_WITHOUT_FLEX_SHRINK = {
//     '/landing': '/landing'
// }
export default {
    // computed: {
    //     flexShrink(){
    //         return PAGES_WITHOUT_FLEX_SHRINK[this.$route.path] ? false : 'xflex-shrink-0'
    //     }
    // },
};
</script>
