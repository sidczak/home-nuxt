<template lang="pug">
Section.h-100(:title="homeTranslation.title" :subtitle="homeTranslation.subtitle")
    template(slot='content')
</template>
<script>
import Section from "../../components/common/Section";

export default {
    name: "Vue Mastery",
    components: {
        Section,
    },
    data() {
        return {
            homeTranslation: {
                title: 'Vue Mastery',
                subtitle: 'Course',
            },
        };
    },
};
</script>
