<template lang="pug">
Main
    template(slot='section')
        StartAbout
        StartTools
        Section(title="title" subtitle="subtitle" onAnimation typeAnimation="blur")
            template(slot='content')
                EventsList
        Section(title="title" subtitle="subtitle" onAnimation typeAnimation="blur")
            template(slot='content')
                ol
                    li Google Analytics
                    li Social media - connect
                ol
                    li CardCredit
                    li CardSlider
                    li CardStarWars
                ol
                    li Object and array
                    li FAQ i Filtry
                    li Terms and menu
                    li Contact form
                ol
                    li Contact Us
                    li About Us
                    li Team
                    li FAQ
                    li Site Map
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
