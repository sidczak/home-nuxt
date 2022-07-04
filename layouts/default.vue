<template lang="pug">
div(v-if="!$colorMode.unknown")
    header
        Navbar
    main
        ColorModePicker
        Nuxt
    //- footer
        b-container
            span.float-right
                a(href="#")
                    | Back to top
            span
                | &copy; 2017-2018 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a>
</template>
