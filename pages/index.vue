<template lang="pug">
Main
    template(slot='section')
        StartTools
        //- VeeValidateBasic
        VeeValidateForm
        VuelidateBasic
        Section(noBody)
            template(slot='content')
                b-container
                    b-row.align-items-center
                        b-col(lg="6" md="12")
                            p(v-text='$t("home.start")')



</template>
<script>
import Section from "@components/common/Section";
// import VeeValidateBasic from "@components/common/VeeValidateBasic";
import VeeValidateForm from "@components/common/VeeValidateForm";
import VuelidateBasic from "@components/common/VuelidateBasic";

export default {
    components: {
        Section,
        // VeeValidateBasic,
        VeeValidateForm,
        VuelidateBasic,
    },
    // head() {
    //     return {
    //         title: "HomeNuxt - Start",
    //         htmlAttrs: {
    //             class: `h-100 ${this.$colorMode.preference}-mode`,
    //         },
    //     };
    // },
    name: "Start",
};
</script>
