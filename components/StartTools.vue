<template lang="pug">
Section(:title="homeTranslation.title" :subtitle="homeTranslation.subtitle" :desc="homeTranslation.desc")
    template(slot='content')
        b-row
            b-col.mt-4(v-for="tool of tools" :key="tool.id" md="4")
                b-card.h-100(no-body :bg-variant="tool.bgVariant" text-variant="white" :class="`shadow-${$colorMode.preference}`")
                    .my-auto
                        b-card-body
                            font-awesome-icon.d-block.mb-3.mx-auto(:icon="['fab', tool.icon]" size="5x")
                            b-card-title.text-center(title-tag="h3")
                                | {{tool.title}}
                            b-card-text
                                | {{tool.desc}}
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
import Section from "./common/Section";

export default {
    components: {
        Section,
    },
    data() {
        return {
            homeTranslation: {
                title: this.$t("home.tools.title"),
                subtitle: this.$t("home.tools.subtitle"),
                desc: this.$t("home.tools.desc"),
            },
            tools: [
                {
                    icon: "symfony",
                    title: this.$t("home.tools.symfony_title"),
                    desc: this.$t("home.tools.symfony_desc"),
                    bgVariant: "wet-asphalt-concave-145",
                },
                {
                    icon: "vuejs",
                    title: this.$t("home.tools.vue_title"),
                    desc: this.$t("home.tools.vue_desc"),
                    bgVariant: "turquoise-concave-145",
                },
                {
                    icon: "bootstrap",
                    title: this.$t("home.tools.bootstrap_title"),
                    desc: this.$t("home.tools.bootstrap_desc"),
                    bgVariant: "amethyst-concave-145",
                },
            ],
        };
    },
    // computed: {
    //     colorMode() {
    //         return this.$colorMode.preference;
    //     },
    // },
};
</script>
<style lang="scss" scoped>
.card {
    transition: background-color 0.3s;
}
</style>
