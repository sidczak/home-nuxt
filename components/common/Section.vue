<template lang="pug">
section
    b-container
        b-row.justify-content-center.mb-2
            b-col.text-center(md="6")
                h2 {{title}}
                h3 {{subtitle}}
                p.mb-0 {{desc}}
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
            default: "Desc",
        },
    },
};
</script>
<style lang="scss"></style>
