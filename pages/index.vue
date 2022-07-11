<template lang="pug">
b-container
    b-row
        b-col
            | {{ $t('welcome') }}
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
