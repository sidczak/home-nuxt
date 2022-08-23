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
<style>
.card {
    transition: background-color 0.3s;
}
</style>
