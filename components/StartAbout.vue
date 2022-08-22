<template lang="pug">
Section(:title="homeTranslation.title" :subtitle="homeTranslation.subtitle" :desc="homeTranslation.desc")
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
                title: this.$t("home.about.title"),
                subtitle: this.$t("home.about.subtitle"),
                desc: this.$t("home.about.desc"),
            },
        };
    },
};
</script>
