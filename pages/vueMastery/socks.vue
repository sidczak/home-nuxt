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
                                | {{isLoading}}
                                div(v-for="mountain in mountains" :key="mountain.title")
                                    | {{mountain.title}}
                                b-button(variant="primary" @click="fetchRivers") Rivers
                    b-col
                        b-card(bg-variant="dark" header="Dark" text-variant="white")
                            b-card-text
                                | Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                div(v-for="river in rivers" :key="river.title")
                                    | {{river.title}}
</template>
<script>
import Section from "../../components/common/Section";
import { DemoService } from "../../services/Demo";

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
            isLoading: false,
            isError: false,
            mountains: [],
            rivers: [],
        };
    },

    // async asyncData({ $axios }) {
    //     const rivers = await $axios.$get("https://api.nuxtjs.dev/rivers");
    //     return { rivers };
    // },

    // async fetch() {
    //     const response = await this.$axios.get(
    //         "https://api.nuxtjs.dev/mountains"
    //     );
    //     this.mountains = response.data;
    // },
    methods: {
        async fetchRivers() {
            try {
                this.isLoading = true;
                // const response = await this.$axios.get(
                //     "https://api.nuxtjs.dev/rivers"
                // );
                const response = await DemoService.getRivers(this.$axios);
                this.rivers = response.data;
            } catch (error) {
                this.isError = true;
            } finally {
                this.isLoading = false;
            }
        },
        async onSearch() {
            try {
                this.isLoading = true;
                // const response = await this.$axios.get(
                //     "https://api.nuxtjs.dev/mountains"
                // );
                const response = await DemoService.getMountains(this.$axios);
                this.mountains = response.data;
            } catch (error) {
                this.isError = true;
            } finally {
                this.isLoading = false;
            }
        },
    },
    async fetch() {
        await this.onSearch();
    },
};
</script>
