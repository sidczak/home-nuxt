<template lang="pug">
section.d-flex.align-items-center.py-5(:class="[{'h-100': height}]") 
    b-container
        b-row.justify-content-center.mb-2
            b-col.text-center(md="6")
                h2 {{title}}
                h3 {{subtitle}}
                p.mb-0(v-if="desc" v-html="desc")
        slot(name="content")
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            default: "Title",
        },
        subtitle: {
            type: String,
            default: "Subtitle",
        },
        desc: {
            type: String,
            default: null,
        },
        height: {
            type: Boolean,
            default: false,
        },
    },
};
</script>
<style lang="scss">
section {
}
</style>
