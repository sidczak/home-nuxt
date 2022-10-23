<template lang="pug">
Main
    template(slot='section')
        Section(:title="homeTranslation.title" :subtitle="homeTranslation.subtitle" :desc="homeTranslation.desc")
            template(slot='content')
                b-row
                    b-col(cols="4")
                        b-card(:bg-variant="bgVariant" :class="`shadow-${$colorMode.preference}`" no-body)
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
                        b-card(:bg-variant="bgVariant" :class="`shadow-${$colorMode.preference}`" no-body)
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
                        b-card(:bg-variant="bgVariant" :class="`shadow-${$colorMode.preference}`" no-body)
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
// import { textColor } from "../helpers/colorVariant.js";
import Section from "@components/common/Section";

export default {
    name: "Pricing",
    components: {
        Section,
    },
    data() {
        return {
            homeTranslation: {
                title: this.$t("home.about.title"),
                subtitle: this.$t("home.about.subtitle"),
            },
        };
    },
    computed: {
        bgVariant() {
            // return Object.keys(colors).find(
            //     (item) => item === this.$colorMode.preference
            // );
            return `${this.$colorMode.preference}-concave-145`;
        },
        // textVariant() {
        //     return textColor[this.$colorMode.preference];
        // },
    },
};
</script>
<style lang="scss" scoped>
.card {
    transition: background-color 0.3s;
}
.list-group-item {
    background-color: transparent;
}
</style>
