<template lang="pug">
  div
    | {{ $t('welcome') }}
    b-container
      b-row
        b-col
          b-card(:bg-variant="bgVariant" :text-variant="textVariant" :header="docState")
            b-card-text
              | Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</template>
<script>
export default {
  data() {
    return {
      docState: "light",
    };
  },
  computed: {
    bgVariant() {
      switch (this.docState) {
        case "light":
          return "light";
        case "dark":
          return "dark";
        default:
          return "success";
      }
    },
    textVariant() {
      switch (this.docState) {
        case "light":
          return "dark";
        case "dark":
          return "white";
        default:
          return "white";
      }
    },
  },
};
</script>
