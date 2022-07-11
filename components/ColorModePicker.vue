<template lang="pug">
    b-container.mb-5
      b-row
        b-col
            .d-flex.justify-content-center.m-5
                //- .color(v-for="color of colors" :key="color" @click="$colorMode.preference = color" :class="`bg-${color}`")
                .color(v-for="color of availableColors" :key="color" @click="$colorMode.preference = color" :class="getColor(color)")
      b-row
        b-col.text-center
            select.mr-1(v-model="$colorMode.preference")
                //- option(value="system")
                //-     | system
                option(v-for="color of colors" :key="color" :value="color")
                    | {{color}}
            | Color mode: <b>{{ $colorMode.preference }}</b>
            span
                | (<i>{{ $colorMode.value }}</i> mode detected)
</template>
<script>
import colors from "../assets/exports/colors.scss";

export default {
    data() {
        return {
            // colors: ["light", "dark", "success"],
            colors: Object.keys(colors),
        };
    },
    computed: {
        availableColors() {
            // return this.colors.filter(
            //     (item) => item !== this.$colorMode.preference
            // );
            // return Object.keys(bgColor).filter(
            //     (item) => item !== this.$colorMode.preference
            // );
            return Object.keys(colors).filter(
                (item) => item !== this.$colorMode.preference
            );
        },
    },
    methods: {
        getColor(color) {
            return `bg-${color}`;
        },
    },
};
</script>
<style lang="scss">
.color {
    border-radius: 2px;
    width: 25px;
    height: 25px;
    margin: 0 10px;
    cursor: pointer;
}
</style>
