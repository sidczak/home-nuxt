<template lang="pug">
Section.welcome__bg(noBody)
    template(slot='content')
        .welcome__images(v-if="mobile")
            transition(name='picture-out' mode='out-in' appear)
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
                    .welcome__images-mobile(v-if="!mobile")
                        transition(name='picture-out' mode='out-in' appear)
                            b-img(
                                fluid
                                :key='computedImage.name'
                                :src='computedImage.name'
                                :alt='computedImage.alt'
                            )
                    p 
                        | Vitae, rhoncus, vitae vestibulum sem. Pharetra arcu, fringilla id elementum sit. Sociis facilisi lectus tempor, velit vel. Aliquam quis quis integer morbi turpis in pulvinar sed quam.
                    div
                        b-button(variant="primary" @mouseover='switchImage(0)') Face 1
                        b-button(variant="primary" @mouseover='switchImage(1)') Face 2
                        b-button(variant="primary" @mouseover='switchImage(2)') Face 3
                        b-button(variant="primary" @mouseover='switchImage(3)') Face 4
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
                { name: "face1-705", alt: "First step" },
                { name: "face2-705", alt: "Tutorial" },
                { name: "face3-705", alt: "Webinar room" },
                { name: "face4-705", alt: "Webinar room" },
            ],
            currentImage: null,
            mobile: false,
        };
    },
    created() {
        const number = Math.floor(Math.random() * this.images.length);
        this.currentImage = number;
    },
    mounted() {
        window.addEventListener("resize", this.handleResize);
        this.handleResize();
    },
    destroyed() {
        window.removeEventListener("resize", this.handleResize);
    },
    computed: {
        computedImage() {
            const image = this.images[this.currentImage];
            return {
                name: require(`@images/landing/homepage/${image.name}.jpeg`),
                alt: image.alt,
            };
        },
    },
    methods: {
        switchImage(number) {
            this.currentImage = number;
        },
        handleResize() {
            if (992 > window.innerWidth) {
                this.mobile = false;
            } else {
                this.mobile = true;
            }
        },
    },
};
</script>

<style lang="scss" scoped>
@import "bootstrap/scss/_functions.scss";
@import "bootstrap/scss/_variables.scss";
@import "bootstrap/scss/_mixins.scss";
.welcome {
    &__bg {
        background-color: #eef1f7;
    }
    &__images {
        position: absolute;
        right: 15px;
        top: 50%;
        transform: translateY(-50%);
        width: calc(50% - 30px);
        display: flex;
        align-items: center;
        justify-content: flex-end;
        .img-fluid {
            max-height: 550px;
            margin-right: auto;
        }
        @include media-breakpoint-down(md) {
            display: none;
        }
    }
    &__images-mobile {
        margin-bottom: 25px;
        text-align: center;
        .img-fluid {
            max-height: 450px;
            margin: auto;
        }
    }
}
.picture {
    &-out,
    &-in {
        &-leave-active,
        &-enter-active {
            transition: all 0.3s ease-in-out;
        }
        &-enter,
        &-leave-to {
            opacity: 0;
        }
    }
    &-out {
        &-enter {
            transform: scale(0.5);
        }
        &-leave-to {
            transform: scale(1.3);
        }
    }
    &-in {
        &-enter {
            transform: scale(1.3);
        }
        &-leave-to {
            transform: scale(0.5);
        }
    }
}
</style>
