<template lang="pug">
.d-flex.flex-column.h-100(v-if="!$colorMode.unknown")
    header
        Navbar
    main.h-100.flex-shrink-0
        Nuxt
    footer.mt-auto.py-5
        Footer
</template>
