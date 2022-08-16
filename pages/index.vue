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
            b-card.h-100(no-body :bg-variant="tool.bgVariant" text-variant="white")
                .my-auto
                    b-card-body
                        b-card-text.text-center
                            font-awesome-icon.mb-3(:icon="['fab', tool.icon]" size="5x")
                        b-card-title.text-center(title-tag="h3")
                            | {{tool.title}}
                        b-card-text
                            | {{tool.desc}}
        //- b-col
        //-     b-card(bg-variant="wet-asphalt-concave-145" text-variant="white" header="symfony")
        //-         b-card-text
        //-             font-awesome-icon(:icon="['fab', 'symfony']" size="4x")
        //-             | Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        //- b-col
        //-     b-card(bg-variant="turquoise-concave-145" text-variant="white" :header="$colorMode.preference")
        //-         b-card-text
        //-             font-awesome-icon(:icon="['fab', 'vuejs']" size="4x")
        //-             | Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</template>

<script>
export default {
    data() {
        return {
            tools: [
                {
                    icon: 'symfony',
                    title: 'Symfony',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
    computed: {
        bgVariant() {
            return this.$colorMode.preference;
        },
    },
};
</script>
<style>
.card {
    transition: background-color 0.3s;
}
</style>
