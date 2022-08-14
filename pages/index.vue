<template lang="pug">
b-container
    b-row
        b-col
            | {{ $t('welcome') }}
    //- b-row
        b-col
            b-card(:bg-variant="bgVariant" :header="$colorMode.preference")
                b-card-text
                    | {{bgVariant}} Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    b-row
        b-col(v-for="tool of tools" :key="tool")
            b-card(:bg-variant="tool.bgVariant" text-variant="white" header="header")
                b-card-text
                    font-awesome-icon(:icon="['fab', tool.icon]" size="4x")
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
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    bgVariant: 'wet-asphalt-concave-145',
                },
                {
                    icon: 'vuejs',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    bgVariant: 'turquoise-concave-145',
                },
                {
                    icon: 'bootstrap',
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
