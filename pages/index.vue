<template lang="pug">
b-container
    b-row
        b-col
            | {{ $t('welcome') }}
    b-row.justify-content-center.mb-2
        b-col.text-center(md="6")
            h2 Tools
            h3 What Tools We Use
            p.mb-0 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
    b-row
        b-col.mt-4(v-for="tool of tools" :key="tool" md="4")
            b-card.h-100(no-body :bg-variant="tool.bgVariant" text-variant="white" :class="`shadow-${$colorMode.preference}`")
                .my-auto
                    b-card-body
                        font-awesome-icon.d-block.mb-3.mx-auto(:icon="['fab', tool.icon]" size="5x")
                        b-card-title.text-center(title-tag="h3")
                            | {{tool.title}}
                        b-card-text
                            | {{tool.desc}}
</template>

<script>
export default {
    data() {
        return {
            tools: [
                {
                    icon: 'symfony',
                    title: 'Symfony',
                    desc: this.$t('welcome'),
                    bgVariant: 'wet-asphalt-concave-145',
                },
                {
                    icon: 'vuejs',
                    title: 'Vue',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    bgVariant: 'turquoise-concave-145',
                },
                {
                    icon: 'bootstrap',
                    title: 'Bootstrap',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    bgVariant: 'amethyst-concave-145',
                },
            ],
        };
    },
    // computed: {
    //     colorMode() {
    //         return this.$colorMode.preference;
    //     },
    // },
};
</script>
<style>
.card {
    transition: background-color 0.3s;
}
</style>
