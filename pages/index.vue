<template lang="pug">
b-container
    b-row
        b-col
            | {{ $t('welcome') }}
    b-row
        b-col
            b-card(:bg-variant="bgVariant" :text-variant="textVariant" :header="$colorMode.preference")
                b-card-text
                    | {{bgVariant}} Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</template>

<script>
import { bgColor, textColor } from "../helpers/colorVariant.js";

export default {
    computed: {
        bgVariant() {
            return bgColor[this.$colorMode.preference]
                ? bgColor[this.$colorMode.preference]
                : "danger";
            // switch (this.$colorMode.preference) {
            //   case "system":
            //     return "dark";
            //   case "light":
            //     return "light";
            //   case "dark":
            //     return "dark";
            //   case "success":
            //     return "success";
            //   default:
            //     return "danger";
            // }
        },
        textVariant() {
            return textColor[this.$colorMode.preference];
        },
    },
};
</script>
<style>
.card {
    transition: background-color 0.3s;
}
</style>
