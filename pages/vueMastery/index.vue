<template lang="pug">
Main
    template(slot='section')
        Section(:title="homeTranslation.title" :subtitle="homeTranslation.subtitle")
            template(slot='content')
                //- NuxtLink(to="/vueMastery/socks") Socks
                //- NuxtLink(:to="localePath('/vueMastery/socks')") Socks
                b-row
                    b-col
                        | 1. Object and array
                        br
                        | 2. Aliasy
                        br
                        | 3. FAQ i Filtry
                        br
                        | 4. Terms and menu
                        br
                        | 5. Contact form
                        pre
                            code
                                | computed: {
                                |     computedDevices() {
                                //-         return Object.keys(this.devices)
                                //-             .filter((key) => 0 < this.devices[key].length)
                                //-             .map((key) => {
                                //-                 return {
                                //-                     componentSlug: key,
                                //-                     name: this.translatedKeys[key],
                                //-                     devices: this.devices[key],
                                //-                 };
                                //-             });
                                |     },
                                |     computedItems() {
                                //-         return this.items
                                //-             .filter((item) => 0 < this.items.length)
                                //-             .map((item) => {
                                //-                 return {
                                //-                     ...item,
                                //-                     icon: `${icons[item.slug]}-14`,
                                //-                     name:
                                //-                         this.$t(translationKeys[item.slug]) ||
                                //-                         translationKeys[item.slug],
                                //-                 };
                                //-             });
                                |     },
                                | },
</template>
<script>
import Section from "../../components/common/Section";

export default {
    name: "VueMastery",
    components: {
        Section,
    },
    data() {
        return {
            homeTranslation: {
                title: "Vue Mastery",
                subtitle: "Course",
            },
        };
    },
};
</script>
