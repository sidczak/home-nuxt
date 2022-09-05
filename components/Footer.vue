<template lang="pug">
b-container
    b-row
        b-col.mb-3(cols="6" md="3")
            h5
                | HomeNuxt
            p
                | Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        b-col.mb-3(cols="6" md="2")
            h5
                | Useful Links
            b-nav(vertical)
                b-nav-item.mb-2(link-classes="p-0 text-muted")
                    | Home
                b-nav-item.mb-2(link-classes="p-0 text-muted")
                    | Features
                b-nav-item.mb-2(link-classes="p-0 text-muted")
                    | Pricing
                b-nav-item.mb-2(link-classes="p-0 text-muted")
                    | FAQs
                b-nav-item.mb-2(link-classes="p-0 text-muted")
                    | About
        b-col.mb-3(cols="6" md="2")
            h5
                | Contact
            b-nav(vertical)
                b-nav-item.mb-2(link-classes="p-0 text-muted")
                    | Home
                b-nav-item.mb-2(link-classes="p-0 text-muted")
                    | Features
                b-nav-item.mb-2(link-classes="p-0 text-muted")
                    | Pricing
                b-nav-item.mb-2(link-classes="p-0 text-muted")
                    | FAQs
                b-nav-item.mb-2(link-classes="p-0 text-muted")
                    | About
    .d-flex.flex-column.flex-sm-row.justify-content-between.py-4.my-4.border-top
        p
            |&copy; 2022 Company, Inc. All rights reserved. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a>
        ul.d-flex.list-unstyled
            li.ml-3
                a.link-dark(href="#")
                    font-awesome-icon(:icon="['fab', 'twitter']" size="2x" fixed-width)
            li.ml-3
                a.link-dark(href="#")
                    font-awesome-icon(:icon="['fab', 'instagram']" size="2x" fixed-width)
            li.ml-3
                a.link-dark(href="#")
                    font-awesome-icon(:icon="['fab', 'facebook']" size="2x" fixed-width)
</template>
