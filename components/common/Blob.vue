<template lang="pug">
//- https://passionhacks.com/blob-maker/?n=1&e=6&gw=6&se=146&c=d1d8e0&o=0
.blob
    svg(v-for="n in computedShadow" viewBox="0 0 800 500" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%")
        g(transform="translate(117.13603210449219, 13.879043579101562)")
            defs
                linearGradient(id="gradient" x1="0%" y1="0%" x2="0%" y2="100%")
                    stop(offset="0%" style="stop-color: rgb(255, 95, 109);")
                    stop(offset="100%" style="stop-color: rgb(255, 195, 113);")
            path(:fill="fill" :stroke="stroke" :stroke-width="strokeWidth")
                animate(
                    attributeName="d" 
                    dur="10s" 
                    repeatCount="indefinite" 
                    values="M467,319Q440,388,369.5,393.5Q299,399,244.5,417.5Q190,436,142.5,399Q95,362,90.5,306Q86,250,103,203Q120,156,161.5,130.5Q203,105,263,64.5Q323,24,356,86.5Q389,149,441.5,199.5Q494,250,467,319Z;M429.5,308Q409,366,356,390Q303,414,250,413Q197,412,124,403.5Q51,395,73.5,322.5Q96,250,89.5,189Q83,128,142.5,115Q202,102,255,87Q308,72,378,89Q448,106,449,178Q450,250,429.5,308Z;M424,304.5Q400,359,349.5,380Q299,401,238,438Q177,475,112.5,436Q48,397,35.5,323.5Q23,250,44.5,183Q66,116,123,75Q180,34,240.5,64Q301,94,359,111.5Q417,129,432.5,189.5Q448,250,424,304.5Z;M408,300.5Q389,351,353,403Q317,455,251,452Q185,449,135,409.5Q85,370,53.5,310Q22,250,42,182Q62,114,122,77Q182,40,240,71Q298,102,367.5,108Q437,114,432,182Q427,250,408,300.5Z;M438.5,313Q424,376,373.5,425.5Q323,475,261,440.5Q199,406,128.5,397.5Q58,389,75,319.5Q92,250,75,180Q58,110,130,106.5Q202,103,262,66Q322,29,377,73.5Q432,118,442.5,184Q453,250,438.5,313Z;M467,319Q440,388,369.5,393.5Q299,399,244.5,417.5Q190,436,142.5,399Q95,362,90.5,306Q86,250,103,203Q120,156,161.5,130.5Q203,105,263,64.5Q323,24,356,86.5Q389,149,441.5,199.5Q494,250,467,319Z"
                )
</template>
<script>
export default {
    props: {
        shadow: {
            type: Boolean,
            default: false,
        },
        type: {
            type: String,
            default: "fill",
            validator: (value) => ["fill", "stroke"].includes(value),
        },
        strokeWidth: {
            type: Number,
            default: 5,
        },
    },
    data() {
        return {
            fill: null,
            stroke: null,
        };
    },
    created() {
        if ("fill" === this.type) {
            this.fill = "url(#gradient)";
        } else {
            this.fill = "none";
            this.stroke = "url(#gradient)";
        }
    },
    computed: {
        computedShadow() {
            return this.shadow ? 2 : 1;
        },
    },
};
</script>
<style lang="scss" scoped>
.blob {
    display: flex;
    position: relative;
    margin: auto;
    height: 100%;
    svg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        &:nth-child(2) {
            filter: blur(30px);
        }
    }
}
</style>
