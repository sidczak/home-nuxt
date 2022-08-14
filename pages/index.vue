<template lang="pug">
b-container
    b-row
        b-col
            | {{ $t('welcome') }}
            font-awesome-icon(:icon="['fas', 'adjust']")
            font-awesome-icon(icon="adjust")
            font-awesome-icon(icon="house-user")
            font-awesome-icon(:icon="['fab', 'symfony']" size="4x")
            font-awesome-icon(icon="coffee" fixed-width)
            font-awesome-icon(:icon="['fas', 'coffee']" rotation="90" fixed-width)
            font-awesome-icon(:icon="['fas', 'cog']" spin fixed-width)
    b-row
        b-col
            b-card(:bg-variant="bgVariant" :header="$colorMode.preference")
                b-card-text
                    | {{bgVariant}} Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</template>

<script>
export default {
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
