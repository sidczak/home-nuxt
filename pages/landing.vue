<template lang="pug">
Main
    template(slot='section')
        StartAbout
        StartTools
        Section(title="title" subtitle="subtitle" onAnimation typeAnimation="blur")
            template(slot='content')
                EventsList
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
};
</script>
