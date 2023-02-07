<template lang="pug">
    div
        img.img-fluid.w-100.d-block(:src='imgSrc' :alt='caption')
        .container
            .carousel-caption
                h1(v-if='caption' v-text='caption')
                p(v-if='text' v-text='text')
</template>

<script>
export default {
    props: {
        caption: {
            type: String,
            default: null,
        },
        text: {
            type: String,
            default: null,
        },
        imgSrc: {
            type: String,
            default: null,
        },
    },
};
</script>
