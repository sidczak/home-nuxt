<template lang="pug">
b-container
    b-row
        b-col.mb-3(cols="12" lg="3")
            h5
                | HomeNuxt
            p
                | Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        b-col.mb-3(cols="6" lg="2")
            h5
                | Useful Links
            b-nav(vertical)
                b-nav-item.mb-2(link-classes="p-0 xtext-muted")
                    font-awesome-icon.mt-1.mr-2(:icon="['fas', 'caret-right']" fixed-width)
                    | Home
                b-nav-item.mb-2(link-classes="p-0 text-muted")
                    font-awesome-icon.mt-1.mr-2(:icon="['fas', 'caret-right']" fixed-width)
                    | Features
                b-nav-item.mb-2(link-classes="p-0 text-muted")
                    font-awesome-icon.mt-1.mr-2(:icon="['fas', 'caret-right']" fixed-width)
                    | Pricing
                b-nav-item.mb-2(link-classes="p-0 text-muted")
                    font-awesome-icon.mt-1.mr-2(:icon="['fas', 'caret-right']" fixed-width)
                    | FAQs
                b-nav-item.mb-2(link-classes="p-0 text-muted")
                    font-awesome-icon.mt-1.mr-2(:icon="['fas', 'caret-right']" fixed-width)
                    | About
        b-col.mb-3(cols="6" lg="3")
            h5
                | Contact
            ul.list-unstyled
                li.d-flex.mb-2
                    font-awesome-icon.mt-1.mr-2(:icon="['fas', 'location-dot']" fixed-width)
                    span
                        | ul. Street name 25K, <br/>86-150 City name, Country
                li.d-flex.mb-2
                    font-awesome-icon.mt-1.mr-2(:icon="['fas', 'mobile-screen-button']" fixed-width)
                    a(href="tel: 500 464 679") 500 464 679
                li.d-flex.mb-2
                    font-awesome-icon.mt-1.mr-2(:icon="['fas', 'at']" fixed-width)
                    a(href="mailto:info@frontcode.com") info@frontcode.com
                li.d-flex.mb-2
                    font-awesome-icon.mt-1.mr-2(:icon="['fas', 'globe']" fixed-width)
                    a(href="/") frontcode.com
        b-col.mb-3(lg="4")
            h5 Subscribe to our newsletter
            p Monthly digest of what's new and exciting from us.
            .d-flex.flex-column.flex-sm-row.w-100
                label(class="sr-only" for="newsletter1") Email address
                b-form-input(id="newsletter1" placeholder="Email address")
                b-button(variant="primary") Subscribe
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
