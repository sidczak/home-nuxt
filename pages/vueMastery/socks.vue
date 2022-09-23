<template lang="pug">
Main
    template(slot='section')
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
import Section from "../../components/common/Section";

export default {
    name: "About",
    components: {
        Section,
    },
    data() {
        return {
            homeTranslation: {
                title: "Socks",
                subtitle: this.$t("home.about.subtitle"),
            },
        };
    },
};
</script>
