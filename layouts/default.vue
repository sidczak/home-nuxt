<template lang="pug">
.d-flex.flex-column.h-100(v-if="!$colorMode.unknown")
    header
        Navbar
    main
        ColorModePicker
        Nuxt
    footer.mt-auto.py-3
        b-container
            span.float-right
                a(href="#")
                    | Back to top
            span
                | &copy; 2017-2018 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a>
</template>
