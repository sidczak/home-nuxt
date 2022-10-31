<template lang="pug">
Section(noBody)
    template(slot='content')
        .welcome__images
            transition(name='slide' mode='out-in')
                b-img(
                    fluid
                    :key='computedImage.name'
                    :src='computedImage.name'
                    :alt='computedImage.alt'
                )
        b-container
            b-row.align-items-center
                b-col(lg="6" md="12")
                    h2 
                        | Witaj w ClickMeeting!
                    p 
                        | Vitae, rhoncus, vitae vestibulum sem. Pharetra arcu, fringilla id elementum sit. Sociis facilisi lectus tempor, velit vel. Aliquam quis quis integer morbi turpis in pulvinar sed quam.
                    b-button(variant="primary" @mouseover='switchImage(0)') First step
                    b-button(variant="primary" @mouseover='switchImage(1)' @mouseleave='switchImage(0)') Tutorial
                    b-button(variant="primary" @mouseover='switchImage(2)' @mouseleave='switchImage(0)') Webinar room
                b-col.order-first.order-lg-last(lg="6" md="12")

</template>

<script>
import Section from "@components/common/Section";

export default {
    components: {
        Section,
    },
    data() {
        return {
            images: [
                { name: "first-step-room-550", alt: "First step" },
                { name: "tutorial-550", alt: "Tutorial" },
                { name: "webinar-room-550", alt: "Webinar room" },
            ],
            currentImage: 0,
        };
    },
    computed: {
        computedImage() {
            const image = this.images[this.currentImage];
            return {
                name: require(`@images/welcome/${image.name}.png`),
                alt: image.alt,
            };
        },
    },
    methods: {
        switchImage(number) {
            this.currentImage = number;
        },
    },
};
</script>

<style lang="scss" scoped>
@import "bootstrap/scss/_functions.scss";
@import "bootstrap/scss/_variables.scss";
@import "bootstrap/scss/_mixins.scss";
.welcome {
    &__images {
        position: absolute;
        left: 55%;
        top: 50%;
        transform: translateY(-50%);
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        .img-fluid {
            max-height: 550px;
        }
        @include media-breakpoint-down(md) {
            display: none;
        }
    }
}
.slide {
    &-leave-active,
    &-enter-active {
        transition: all 0.3s ease-in-out;
    }
    &-enter,
    &-leave-to {
        opacity: 0.3;
    }
    &-enter {
        transform: translateX(70%);
    }
    &-leave-to {
        transform: translateX(70%);
    }
}
</style>
