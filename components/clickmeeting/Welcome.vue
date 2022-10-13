<template lang="pug">
Section(:title="homeTranslation.title" :subtitle="homeTranslation.subtitle")
    template(slot='content')
        b-row.align-items-center
            b-col(lg="6" md="12")
                h2 
                    | Witaj w ClickMeeting!
                p 
                    | Vitae, rhoncus, vitae vestibulum sem. Pharetra arcu, fringilla id elementum sit. Sociis facilisi lectus tempor, velit vel. Aliquam quis quis integer morbi turpis in pulvinar sed quam.
                b-button(variant="primary" @mouseover='switchPicture(0)') Subscribe
                b-button(variant="primary" @mouseover='switchPicture(1)') Subscribe
                b-button(variant="primary" @mouseover='switchPicture(2)') Subscribe
            b-col.order-first.order-lg-last(lg="6" md="12")
                .welcome__images
                    transition(name='picture-out' mode='out-in')
                        b-img(
                            v-for='(picture, index) in prictures'
                            v-if='index === currentPicture'
                            fluid
                            :key='index'
                            :src='getPicture(picture.name)'
                            :alt='picture.alt'
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
            prictures: [
                { name: "first-step-room-930", alt: "First step" },
                { name: "tutorial-930", alt: "Tutorial" },
                { name: "webinar-room-930", alt: "Webinar room" },
            ],
            currentPicture: 0,
            homeTranslation: {
                title: "Welcome",
                subtitle: this.$t("home.about.subtitle"),
            },
        };
    },
    methods: {
        switchPicture(picture) {
            this.currentPicture = picture;
        },
        getPicture(name) {
            return require(`@images/welcome/${name}.png`);
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
    // &__images {
    //     position: absolute;
    //     left: 58%;
    //     top: 50%;
    //     transform: translateY(-50%);
    //     width: 50%;
    //     display: flex;
    //     align-items: center;
    //     justify-content: end;
    //     // img {
    //     //     max-height: 630px;
    //     // }
    // }
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
