<template lang="pug">
.blob
    svg(viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg")
        defs
            pattern(v-for="pattern in computedPatterns" :key="pattern.name" id="pattern" x="0" y="0" :width="pattern.width" :height="pattern.height" patternUnits="userSpaceOnUse" :fill="computedPatternColor" :patternTransform="`rotate(${patternRotate})`")
                path(:d="pattern.path")
        path(fill="url(#pattern)" :stroke="computedStroke" :stroke-width="strokeWidth" transform="translate(100 100)")
            animate(
                attributeName="d" 
                dur="10s" 
                repeatCount="indefinite" 
                values="M46.2,-78.4C60.6,-71.8,73.5,-60.8,78.4,-47C83.3,-33.2,80.3,-16.6,77.6,-1.6C74.9,13.5,72.6,27,67.9,41.3C63.3,55.5,56.3,70.5,44.6,78.8C32.9,87,16.5,88.5,1.8,85.5C-12.9,82.4,-25.9,74.8,-40.2,68.1C-54.5,61.3,-70.2,55.5,-77.4,44.3C-84.7,33.1,-83.5,16.5,-82.8,0.4C-82.1,-15.7,-81.7,-31.3,-75,-43.5C-68.3,-55.6,-55.1,-64.1,-41.6,-71.3C-28,-78.5,-14,-84.2,1,-85.9C15.9,-87.6,31.8,-85.1,46.2,-78.4Z;M46.3,-77.7C59.7,-72.4,70.1,-59.4,77,-45.2C84,-31,87.6,-15.5,87.5,-0.1C87.4,15.4,83.6,30.7,75,42.1C66.4,53.5,52.9,61,39.6,67.2C26.3,73.4,13.2,78.4,-0.7,79.6C-14.5,80.8,-29.1,78.2,-41.3,71.3C-53.6,64.5,-63.5,53.5,-71.8,40.9C-80.1,28.3,-86.8,14.1,-85.6,0.7C-84.3,-12.7,-75.2,-25.4,-66.7,-37.7C-58.2,-49.9,-50.3,-61.7,-39.3,-68.3C-28.3,-75,-14.1,-76.4,1.1,-78.4C16.4,-80.4,32.9,-82.9,46.3,-77.7Z;M46.4,-79.6C60.4,-72.2,72.5,-60.5,80.2,-46.5C87.9,-32.5,91.2,-16.3,90.4,-0.5C89.5,15.3,84.4,30.5,75.9,43.1C67.4,55.7,55.5,65.6,42.3,72.4C29,79.2,14.5,83,-0.7,84.3C-16,85.5,-32,84.3,-45.3,77.5C-58.6,70.8,-69.3,58.5,-75.4,44.6C-81.5,30.8,-82.9,15.4,-83.2,-0.2C-83.5,-15.7,-82.7,-31.5,-74.9,-42.5C-67.2,-53.5,-52.6,-59.7,-39,-67.4C-25.4,-75,-12.7,-84.1,1.7,-87.1C16.1,-90.1,32.3,-87,46.4,-79.6Z;M37.4,-65.6C48.6,-58.3,58.1,-48.6,66,-37.3C73.9,-26,80.2,-13,82,1C83.7,15,80.8,30,74,43.2C67.2,56.5,56.5,67.9,43.5,75.1C30.6,82.3,15.3,85.1,0.5,84.3C-14.3,83.5,-28.7,79,-42.2,72.1C-55.7,65.2,-68.4,56,-76.1,43.6C-83.8,31.2,-86.6,15.6,-86,0.3C-85.5,-15,-81.6,-29.9,-73,-40.9C-64.5,-51.8,-51.2,-58.8,-38.3,-65.2C-25.3,-71.6,-12.7,-77.4,0.2,-77.7C13.1,-78.1,26.1,-73,37.4,-65.6Z;M36,-65.4C46.9,-56,56.3,-47,63.4,-36.1C70.4,-25.3,75.1,-12.6,75.5,0.2C75.9,13.1,71.9,26.2,65.8,38.6C59.7,51,51.4,62.8,40,69.7C28.7,76.5,14.4,78.4,0.9,76.9C-12.6,75.3,-25.1,70.3,-39.1,65C-53.2,59.7,-68.7,54.1,-75.1,43.3C-81.6,32.4,-79,16.2,-77.3,0.9C-75.7,-14.3,-75,-28.6,-68.6,-39.5C-62.1,-50.3,-49.9,-57.7,-37.5,-66.3C-25.1,-74.8,-12.5,-84.5,0,-84.5C12.5,-84.5,25,-74.8,36,-65.4Z;M42.1,-76.2C53,-66.6,59.3,-52.2,66.6,-38.7C74,-25.2,82.5,-12.6,84.7,1.3C86.8,15.1,82.7,30.2,74.4,42.1C66.1,54,53.6,62.5,40.5,70.1C27.4,77.7,13.7,84.2,-1.1,86.1C-15.9,88,-31.7,85.3,-44.5,77.5C-57.3,69.7,-67,57,-72.2,43.2C-77.4,29.5,-78.1,14.7,-79,-0.5C-79.8,-15.7,-80.8,-31.5,-74.7,-43.6C-68.6,-55.8,-55.4,-64.4,-41.7,-72.4C-28.1,-80.4,-14.1,-87.8,0.8,-89.2C15.6,-90.5,31.2,-85.7,42.1,-76.2Z;M46.2,-78.4C60.6,-71.8,73.5,-60.8,78.4,-47C83.3,-33.2,80.3,-16.6,77.6,-1.6C74.9,13.5,72.6,27,67.9,41.3C63.3,55.5,56.3,70.5,44.6,78.8C32.9,87,16.5,88.5,1.8,85.5C-12.9,82.4,-25.9,74.8,-40.2,68.1C-54.5,61.3,-70.2,55.5,-77.4,44.3C-84.7,33.1,-83.5,16.5,-82.8,0.4C-82.1,-15.7,-81.7,-31.3,-75,-43.5C-68.3,-55.6,-55.1,-64.1,-41.6,-71.3C-28,-78.5,-14,-84.2,1,-85.9C15.9,-87.6,31.8,-85.1,46.2,-78.4Z"
            )
</template>
<script>
import colors from "@exports/colors.scss";
export default {
    props: {
        stroke: {
            type: Boolean,
            default: false,
        },
        strokeColor: {
            type: String,
            default: "silver",
            validator: (value) => Object.keys(colors).includes(value),
        },
        strokeWidth: {
            type: Number,
            default: 5,
        },
        pattern: {
            type: String,
            default: "pattern1",
            validator: (value) =>
                ["pattern1", "pattern2", "pattern3", "waves"].includes(value),
        },
        patternColor: {
            type: String,
            default: "silver",
            validator: (value) => Object.keys(colors).includes(value),
        },
        patternRotate: {
            type: Number,
            default: 0,
        },
    },
    data() {
        return {
            patterns: [
                {
                    name: "pattern1",
                    width: 8,
                    height: 8,
                    path: "M0 0h4v4H0V0zm4 4h4v4H4V4z",
                },
                {
                    name: "pattern2",
                    width: 6,
                    height: 6,
                    path: "M5 0h1L0 6V5zM6 5v1H5z",
                },
                {
                    name: "pattern3",
                    width: 40,
                    height: 40,
                    path: "M0 40L40 0H20L0 20M40 40V20L20 40",
                },
                {
                    name: "waves",
                    width: 100,
                    height: 20,
                    path:
                        "M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z",
                },
            ],
        };
    },
    computed: {
        computedPatterns() {
            return this.patterns.filter(
                (pattern) => pattern.name === this.pattern
            );
        },
        computedStroke() {
            return this.stroke ? this.computedStrokeColor : null;
        },
        computedStrokeColor() {
            return colors[this.strokeColor];
        },
        computedPatternColor() {
            return colors[this.patternColor];
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
