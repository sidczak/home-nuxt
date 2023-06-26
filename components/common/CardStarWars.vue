<template lang="pug">
    //- https://codepen.io/JavaScriptJunkie/pen/vzWPbV
    //- b-card.shadow-clouds.position-relative(noBody bg-variant="clouds-concave-145" text-variant="light" :img-src="require('@images/card-star-wars/item-1-bg.webp')" img-alt="Card Image")
    //-     .card-img-overlay
    b-card.shadow-clouds.position-relative(noBody bg-variant="clouds-concave-145" text-variant="dark")
        b-row(no-gutters)
            b-col(md="5")
                transition-group(tag="div" :name="transitionName" appear)
                    b-card-img(:src="require(`@images/card-star-wars/${items[current].image}`)" :key="current" alt="Image")
            b-col(md="7")
                transition(name="fade" mode="out-in" appear)
                    b-card-body(:key="current")
                        b-card-title(title-tag="h2" v-html="items[current].title")
                        b-card-sub-title(class="mb-2" v-html="items[current].price")
                        h5 ENGINE UNIT <br/>
                            b-badge(pill variant="success") P-S4 TWIN
                            b-badge(pill variant="success") P-W401
                        b-card-text
                            | Some quick example text to build on the card title and make up the bulk of the card's content.
                b-card-body
                    b-button(href="#" pill variant="midnight-blue") ADD TO CART
                    b-button(href="#" pill variant="link") ADD TO WISHLIST
                    br
                    div(class="btn btn-prev" aria-label="Previous slide" @click="slide(-1)")
                        | &#10094;
                    div(class="btn btn-next" aria-label="Next slide" @click="slide(1)")
                        | &#10095;
</template>

<script>
export default {
    data() {
        return {
            current: 0,
            // direction: 1,
            transitionName: "fade",
            items: [
                {
                    image: "item-4.webp",
                    title: "STORMTROPER <br/> HELMET",
                    price: "$1.299,<sup>99</sup>",
                },
                {
                    image: "item-1.webp",
                    title: "IMPERIAL  ARMY’S <br/> TIE FIGHTER",
                    price: "$9.999,<sup>99</sup>",
                },
                {
                    image: "item-2.webp",
                    title: "KYLO REN'S <br/> LIGHTSABER",
                    price: "$1.699,<sup>99</sup>",
                },
                {
                    image: "item-3.webp",
                    title: "IMPERIAL ARMY'S <br/> DEATH STAR",
                    price: "$9.999,<sup>99</sup>",
                },
            ],
        };
    },
    methods: {
        slide(dir) {
            // this.direction = dir;
            dir === 1
                ? (this.transitionName = "slide-next")
                : (this.transitionName = "slide-prev");
            var len = this.items.length;
            this.current = (this.current + (dir % len) + len) % len;
        },
    },
};
</script>
<style lang="scss" scoped>
/* FADE IN */
.fade-enter-active {
    transition: opacity 1s;
}
.fade-enter {
    opacity: 0;
}

// .slide-next {
//     &-leave-active,
//     &-enter-active {
//         transition: all 0.5s ease-in-out;
//     }
//     &-enter,
//     &-leave-to {
//         opacity: 0.3;
//     }
//     &-enter {
//         transform: translateX(-100%);
//     }
//     &-leave-to {
//         transform: translateX(-100%);
//     }
// }
.slide-prev {
    &-leave-active,
    &-enter-active {
        transition: all 0.5s ease-in-out;
    }
    &-enter {
        transform: translateX(-100%);
    }
    &-leave-to {
        // transform: translateX(-100%); // nie będzie przerwy
    }
    &-leave-active {
        transform: translateX(-100%); // będzie parę px przerwy
        position: absolute;
    }
    &-enter,
    &-leave-to {
        opacity: 0;
    }
}
.slide-next {
    &-leave-active,
    &-enter-active {
        transition: all 0.5s ease-in-out;
    }
    &-enter {
        transform: translateX(-200px);
    }
    &-leave-to {
        // transform: translateX(-200px); // nie będzie przerwy
    }
    &-leave-active {
        transform: translateX(-200px); // będzie parę px przerwy
        position: absolute;
    }
    &-enter,
    &-leave-to {
        opacity: 0;
    }
}
</style>
