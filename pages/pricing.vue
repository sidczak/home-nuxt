<template lang="pug">
b-container
    b-row
        b-col(cols="4")
            b-card(:bg-variant="bgVariant" :text-variant="textVariant" no-body)
                b-card-header
                    h4.text-center.mb-0
                        | Free
                b-card-body
                    b-card-title.text-center
                        | $0 
                        small.text-muted
                            |/ mo
                    b-card-text
                        | Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                b-list-group.text-center(flush)
                    b-list-group-item
                        | 10 users included
                    b-list-group-item
                        | 2 GB of storage
                    b-list-group-item
                        | Email support
                    b-list-group-item
                        | Help center access
                b-card-footer.text-center
                    b-button(href="#" variant="primary")
                        | Sign up for free
        b-col(cols="4")
            b-card(:bg-variant="bgVariant" :text-variant="textVariant" no-body)
                b-card-header
                    h4.text-center.mb-0
                        | Pro
                b-card-body
                    b-card-title.text-center
                        | $15
                        small.text-muted
                            |/ mo
                    b-card-text
                        | Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                b-list-group.text-center(flush)
                    b-list-group-item
                        | 20 users included
                    b-list-group-item
                        | 10 GB of storage
                    b-list-group-item
                        | Priority email support
                    b-list-group-item
                        | Help center access
                b-card-footer.text-center
                    b-button(href="#" variant="primary")
                        | Get started
        b-col(cols="4")
            b-card(:bg-variant="bgVariant" :text-variant="textVariant" no-body)
                b-card-header
                    h4.text-center.mb-0
                        | Enterprise
                b-card-body
                    b-card-title.text-center
                        | $30
                        small.text-muted
                            |/ mo
                    b-card-text
                        | Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                b-list-group.text-center(flush)
                    b-list-group-item
                        | 30 users included
                    b-list-group-item
                        | 15 GB of storage
                    b-list-group-item
                        | Priority email support
                    b-list-group-item
                        | Help center access
                b-card-footer.text-center
                    b-button(href="#" variant="primary")
                        | Contact us
</template>

<script>
import { bgColor, textColor } from "../helpers/colorVariant.js";

export default {
    computed: {
        bgVariant() {
            return bgColor[this.$colorMode.preference]
                ? bgColor[this.$colorMode.preference]
                : "danger";
        },
        textVariant() {
            return textColor[this.$colorMode.preference];
        },
    },
};
</script>
<style>
.card {
    transition: background-color 0.3s;
}
.list-group-item {
    background-color: transparent;
}
</style>
