<template lang="pug">
    //- https://codepen.io/raghucse2010/pen/bGeQgeE
    //- https://codepen.io/shadowdesigner/pen/EgBGOQ
    //- https://codepen.io/immrseabass/pen/OJjOVLb
    //- https://codepen.io/oscicen/pen/zyJeJw
    //- https://codepen.io/Juxtopposed/pen/gOKwwgx
    //- //https://codepen.io/Shockolate/pen/bLmYGN
    //- https://codepen.io/lsammarco/pen/waMpJw
    div(class="container" @mousemove="parallax")
        div(class="object" v-for="(value, index) in movingValues" :key="index" :data-value="value")
            | Twój kod HTML dla obiektu
</template>

<script>
export default {
    data() {
        return {
            movingValues: [15, -12, 16], // wartości prędkości ruchu dla każdego elementu
        };
    },
    methods: {
        parallax(e) {
            const objects = document.querySelectorAll(".object");

            objects.forEach((object) => {
                const movingValue = object.getAttribute("data-value");

                const x = (e.clientX * movingValue) / 250;
                const y = (e.clientY * movingValue) / 250;

                object.style.transform = `translateX(${x}px) translateY(${y}px)`;
            });
        },
    },
};
</script>
<style lang="scss" scoped>
.container {
    border: 1px solid red;
    text-align: center;
    .object {
        font-size: 30px;
    }
}
</style>
