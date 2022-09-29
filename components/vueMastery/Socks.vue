<template lang="pug">
Section(:title="homeTranslation.title" :subtitle="homeTranslation.subtitle")
    template(slot='content')
        b-row

</template>

<script>
import Section from "../common/Section";

export default {
    components: {
        Section,
    },
    data() {
        return {
            homeTranslation: {
                title: this.$t("home.tools.title"),
                subtitle: this.$t("home.tools.subtitle"),
            },
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
