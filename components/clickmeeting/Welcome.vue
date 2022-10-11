<template lang="pug">
Section(:title="homeTranslation.title" :subtitle="homeTranslation.subtitle")
    template(slot='content')
        b-row
            b-col(lg="6" md="12")
                h2 
                    | Witaj w ClickMeeting!
                p 
                    | Vitae, rhoncus, vitae vestibulum sem. Pharetra arcu, fringilla id elementum sit. Sociis facilisi lectus tempor, velit vel. Aliquam quis quis integer morbi turpis in pulvinar sed quam.
                b-button(variant="primary" @mouseover='switchPicture(0)') Subscribe
                b-button(variant="primary" @mouseover='switchPicture(1)') Subscribe
                b-button(variant="primary" @mouseover='switchPicture(2)') Subscribe
            b-col(lg="6" md="12")
                transition(name='picture-out' mode='out-in')
                    .picture(
                        v-for='(picture, index) in prictures'
                        v-if='index === currentPicture'
                        :key='index'
                    )
                        | {{ picture.name }}

</template>

<script>
import Section from "@components/common/Section";

export default {
    components: {
        Section,
    },
    data() {
        return {
            prictures: [{ name: "home" }, { name: "about" }, { name: "tools" }],
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
    },
};
</script>

<style lang="scss" scoped>
.picture {
    border: 1px solid red;
}
.fade {
    &-enter-active,
    &-leave-active {
        transition: opacity 0.5s;
    }
    &-enter,
    &-leave-to {
        opacity: 0;
    }
}
.fadex {
    &-leave-active,
    &-enter-active {
        transition: all 0.5s ease-in-out;
        position: absolute;
    }
    &-enter {
        transform: translateX(200px);
    }
    &-enter-active {
        left: 50%;
        margin-left: -100px;
    }
    &-leave-active {
        z-index: -1;
    }
    &-leave-to {
        transform: translateX(-200px);
    }
    &-enter,
    &-leave-to {
        opacity: 0;
    }
}
.picture {
    &-out,
    &-in {
        &-leave-active,
        &-enter-active {
            transition: all 0.5s ease-in-out;
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
            transform: scale(1.5);
        }
    }
    &-in {
        &-enter {
            transform: scale(1.5);
        }
        &-leave-to {
            transform: scale(0.5);
        }
    }
}
</style>
