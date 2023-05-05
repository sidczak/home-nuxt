<template lang="pug">
Main
    template(slot='section')
        StartAbout
        StartTools
        Section(title="title" subtitle="subtitle" onAnimation typeAnimation="blur")
            template(slot='content')
                EventsList
        Section(title="title" subtitle="subtitle" onAnimation typeAnimation="blur")
            template(slot='content')
                ol
                    li Google Analytics
                    li Social media - connect
                ol
                    li CardCredit
                    li CardSlider
                    li CardStarWars
                ol
                    li Object and array
                    li FAQ i Filtry
                    li Terms and menu
                    li Contact form
                ol(v-bg-color="'red'")
                    li Contact Us
                    li About Us
                    li Team
                    li FAQ
                    li xSite Map
                button(v-toggle="toggleHandler") Toggle me {{isActive}}

                p https://career.proxify.io/how-it-works
                p https://career.proxify.io/vue/developer?utm_source=google&utm_medium=cpc&utm_campaign=search-skill-vue.js_EUHigh&utm_content=%7BAdGroupName%7D&utm_term=vue.js%20developer&gclid=CjwKCAjw__ihBhADEiwAXEazJl2Ct9AouDDoBo6Avj-Iwqn0ifdD1OS6xR-f543a9HMKD6Bzf6b-qBoCX9IQAvD_BwE

                ol
                    li Vue.js Developers Marketplace: https://vuejobs.com/marketplace
                    li CodeCanyon: https://codecanyon.net/category/javascript/vuejs
                    li Vue Storefront: https://www.vuestorefront.io/marketplace/
                    li Gumroad: https://gumroad.com/
                    li Sellfy: https://sellfy.com/
</template>
<script>
import Section from "@components/common/Section";
import EventsList from "@components/clickmeeting/common/EventsList";
export default {
    name: "Landing",
    components: {
        Section,
        EventsList,
    },
    data() {
        return {
            isActive: false,
        };
    },
    methods: {
        toggleHandler() {
            this.isActive = !this.isActive;
            return this.isActive;
        },
    },
};
</script>
