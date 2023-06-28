<template lang="pug">
    //- https://codepen.io/JavaScriptJunkie/pen/vzWPbV
    //- b-card.shadow-clouds.position-relative(noBody bg-variant="clouds-concave-145" text-variant="light" :img-src="require('@images/card-star-wars/item-1-bg.webp')" img-alt="Card Image")
    //-     .card-img-overlay
    b-card.shadow-clouds.position-relative(noBody bg-variant="clouds-concave-145" text-variant="dark")
        .card__picture
            transition(:name="transitionName" mode="out-in" appear)
                b-card-img.rounded-0(:src="require(`@images/card-star-wars/${items[current].image}`)" :key="current" alt="Image")
        //- transition(name="card-in" appear)
            b-card-img(:src="require(`@images/card-star-wars/${items[current].image}`)" :key="current" alt="Image")
        transition(name="fade" mode="out-in" appear)
            b-card-body(:key="current")
                b-card-title(title-tag="h2" v-html="items[current].title")
                b-card-sub-title(sub-title-tag="h3" class="mb-2" v-html="items[current].price")
                h5 ENGINE UNIT <br/>
                    b-badge(pill variant="success") P-S4 TWIN
                    b-badge(pill variant="success") P-W401
                b-card-text
                    | Some quick example text to build on the card title and make up the bulk of the card's content.
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
            this.transitionName = "slide-next";
            // dir === 1
            //     ? (this.transitionName = "slide-next")
            //     : (this.transitionName = "slide-prev");
            var len = this.items.length;
            this.current = (this.current + (dir % len) + len) % len;
        },
    },
};
</script>
<style lang="scss" scoped>
.card {
    padding-left: 200px;
    margin-left: 200px; 
}
.card__picture {
    position: absolute;
    width: 400px;
    top: 50%;
    left: 0;
    transform: translate(-50%, -50%);
}
.fade {
    &-enter-active,
    &-leave-active {
        transition: all 0.5s;
    }
    &-enter,
    &-leave-to {
        opacity: 0;
    }
    // &-enter {
    //     transform: translateY(20px);
    // }
}
// .slide-next {
//     &-leave-active,
//     &-enter-active {
//         transition: all 0.5s ease-in-out;
//     }
//     &-enter {
//         transform: translateX(-200px);
//     }
//     &-leave-to {
//         // transform: translateX(-200px); // nie będzie przerwy
//     }
//     &-leave-active {
//         transform: translateX(-200px); // będzie parę px przerwy
//         position: absolute;
//     }
//     &-enter,
//     &-leave-to {
//         opacity: 0;
//     }
// }
.slide-next {
    &-leave-active {
        // position: absolute;
    }
    &-leave-active,
    &-enter-active {
        transition: all 0.5s ease-in-out;
    }
    &-enter,
    &-leave-to {
        opacity: 0;
    }
    &-enter {
        transform: translateX(-200px);
    }
    &-leave-to {
        transform: translateX(-200px);
    }
}

.card {
    &-in {
        &-leave-active {
            position: absolute;
        }
        &-leave-active,
        &-enter-active {
            transition: all 0.5s ease-in-out;
        }
        &-enter,
        &-leave-to {
            opacity: 0;
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
