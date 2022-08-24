<template lang="pug">
Section(:title="homeTranslation.title" :subtitle="homeTranslation.subtitle" :desc="homeTranslation.desc")
    template(slot='content')
        b-row
            b-col
                b-card(bg-variant="light" header="Light" text-variant="dark")
                    b-card-text
                        | Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            b-col
                b-card(bg-variant="dark" header="Dark" text-variant="white")
                    b-card-text
                        | Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</template>
<script>
import Section from "../components/common/Section";

export default {
    name: "About",
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
