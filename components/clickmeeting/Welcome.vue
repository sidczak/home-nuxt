<template lang="pug">
Section(:title="homeTranslation.title" :subtitle="homeTranslation.subtitle")
    template(slot='content')
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
                .welcome__images
                    transition(name='picture-out' mode='out-in')
                        b-img(
                            fluid
                            :key='computedImage.name'
                            :src='computedImage.name'
                            :alt='computedImage.alt'
                        )
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
                { name: "first-step-room-500", alt: "First step" },
                { name: "tutorial-500", alt: "Tutorial" },
                { name: "webinar-room-500", alt: "Webinar room" },
            ],
            currentImage: 0,
            homeTranslation: {
                title: "Welcome",
                subtitle: this.$t("home.about.subtitle"),
            },
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
.welcome {
    &__images {
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
.slide {
    &-leave-active,
    &-enter-active {
        transition: all 0.3s ease-in-out;
    }
    &-enter,
    &-leave-to {
        opacity: 0.1;
    }
    &-enter {
        transform: translateX(70%);
    }
    &-leave-to {
        transform: translateX(70%);
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
