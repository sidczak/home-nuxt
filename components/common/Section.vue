<template lang="pug">
section.d-flex.align-items-center.section-py-80(:class="[{'h-100': height}]") 
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
<style lang="scss" scoped>
@import "~sass-rem";
$rem-fallback: false;
section {
    // @include rem(padding, 6px 30px);
    // font-size: rem(11px);
}
.section {
    &-pt-152 {
        padding-top: rem(152px);
    }
    &-py-80,
    &-pt-80 {
        padding-top: rem(80px);
    }
    &-py-80,
    &-pb-80 {
        padding-bottom: rem(80px);
    }
}
</style>
