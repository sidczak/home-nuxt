<template lang="pug">
Main
    template(slot='section')
        Section.h-100(:title="homeTranslation.title" :subtitle="homeTranslation.subtitle")
            template(slot='content')
                //- NuxtLink(to="/vueMastery/socks") Socks
                //- NuxtLink(:to="localePath('/vueMastery/socks')") Socks
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
