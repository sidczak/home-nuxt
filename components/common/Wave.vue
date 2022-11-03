<template lang="pug">
//- https://getwaves.io/
.wave
    svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320")
        defs
            linearGradient(id="gradient" gradientTransform="rotate(90)")
                stop(offset="0%" :style="{stopColor: computedGradientColorStart}")
                stop(offset="100%" :style="{stopColor: computedGradientColorEnd}")
        path(fill="url(#gradient)" :fill-opacity="fillOpacity")
            animate(
                attributeName="d" 
                :dur="computedDuration" 
                repeatCount="indefinite"
                :values="computedShape"
            )
</template>
<script>
import colors from "@exports/colors.scss";

export default {
    props: {
        shape: {
            type: String,
            default: "wave",
            validator: (value) => ["wave", "peak"].includes(value),
        },
        duration: {
            type: Number,
            default: 10,
        },
        fillOpacity: {
            type: Number,
            default: 1,
        },
        gradientColorStart: {
            type: String,
            default: "turquoise",
            validator: (value) =>
                Object.keys(colors).includes(value) || null === value,
        },
        gradientColorEnd: {
            type: String,
            default: null,
            validator: (value) => Object.keys(colors).includes(value),
        },
    },
    data() {
        return {
            shapes: {
                wave:
                    "M0,224L120,197.3C240,171,480,117,720,80C960,43,1200,21,1320,10.7L1440,0L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z;M0,160L120,181.3C240,203,480,245,720,218.7C960,192,1200,96,1320,48L1440,0L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z;M0,192L120,213.3C240,235,480,277,720,293.3C960,309,1200,299,1320,293.3L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z;M0,192L120,208C240,224,480,256,720,245.3C960,235,1200,181,1320,154.7L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z;M0,32L120,69.3C240,107,480,181,720,176C960,171,1200,85,1320,42.7L1440,0L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z;M0,256L120,213.3C240,171,480,85,720,64C960,43,1200,85,1320,106.7L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z;M0,224L120,197.3C240,171,480,117,720,80C960,43,1200,21,1320,10.7L1440,0L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z",
                peak:
                    "M0,256L720,0L1440,128L1440,320L720,320L0,320Z;M0,224L720,96L1440,32L1440,320L720,320L0,320Z;M0,256L720,224L1440,128L1440,320L720,320L0,320Z;M0,256L720,192L1440,256L1440,320L720,320L0,320Z;M0,96L720,64L1440,224L1440,320L720,320L0,320Z;M0,192L720,96L1440,32L1440,320L720,320L0,320Z;M0,256L720,0L1440,128L1440,320L720,320L0,320Z",
            },
        };
    },
    computed: {
        computedShape() {
            return this.shapes[this.shape];
        },
        computedDuration() {
            return `${this.duration}s`;
        },
        computedGradientColorStart() {
            return colors[this.gradientColorStart];
        },
        computedGradientColorEnd() {
            return colors[
                this.gradientColorEnd
                    ? this.gradientColorEnd
                    : this.gradientColorStart
            ];
        },
    },
};
</script>
<style lang="scss" scoped>
.wave {
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
    }
}
</style>
