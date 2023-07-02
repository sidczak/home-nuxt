<template lang="pug">
    //- https://codepen.io/JavaScriptJunkie/pen/vzWPbV
    //- https://codepen.io/shshaw/pen/EvgaRW
    //- https://codepen.io/fpvz/pen/KQwzGQ
    //- b-card.shadow-clouds.position-relative(noBody bg-variant="clouds-concave-145" text-variant="light" :img-src="require('@images/card-star-wars/item-1-bg.webp')" img-alt="Card Image")
    //-     .card-img-overlay
    b-card.shadow-clouds.position-relative(noBody bg-variant="clouds-concave-145" text-variant="dark")
        b-row(no-gutters align-v="center")
            b-col(md="5")
                .card__picture
                    transition-group(:name="transitionName" mode="out-in" appear)
                        b-card-img.rounded-0(:src="require(`@images/card-star-wars/${items[current].image}`)" :key="current" alt="Image")
                    //- transition(:name="transitionName" mode="out-in" appear)
                        b-card-img.rounded-0(:src="require(`@images/card-star-wars/${items[current].image}`)" :key="current" alt="Image")
                    //- transition-group(name="card-in" appear)
                        b-card-img(:src="require(`@images/card-star-wars/${items[current].image}`)" :key="current" alt="Image")
                    //- transition(name="card-in" appear)
                        b-card-img(:src="require(`@images/card-star-wars/${items[current].image}`)" :key="current" alt="Image")
            b-col(md="7")                
                b-card-body
                    transition(name="fade" mode="out-in" appear)
                        b-card-title(title-tag="h2" v-html="items[current].title" :key="current")
                    transition(name="fade" mode="out-in" appear)
                        b-card-sub-title.mb-2.animated-1(sub-title-tag="h3" v-html="items[current].price" :key="current")
                    transition(name="fade" mode="out-in" appear)
                        .animated-2(:key="current")
                            h5 ENGINE UNIT <br/>
                                b-badge(pill variant="success") P-S4 TWIN
                                b-badge(pill variant="success") P-W401
                            b-card-text.mb-3
                                | Some quick example text to build on the card title and make up the bulk of the card's content.
                    transition(name="fade" mode="out-in" appear)
                        .animated-3(:key="current")
                            h5 ENGINE UNIT <br/>
                                b-badge(pill variant="success") P-S4 TWIN
                                b-badge(pill variant="success") P-W401
                            b-card-textt
                                | Some quick example text to build on the card title and make up the bulk of the card's content.
                transition(name="fade" mode="out-in" appear)
                    b-card-body.animated-1(:key="current")
                        b-button(href="#" pill variant="midnight-blue") ADD TO CART
                        b-button(href="#" pill variant="link") ADD TO WISHLIST
                b-card-body
                    div(class="btn btn-prev" aria-label="Previous slide" @click="slide(-1)")
                        | &#10094;
                    div(class="btn btn-next" aria-label="Next slide" @click="slide(1)")
                        | &#10095;
                ul.dots
                    li(v-for="(item, index) in items" :class='{ active: index === current }' @click="jump(index)")
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
        jump(index) {
            this.transitionName = "slide-next";
        },
    },
};
</script>
<style lang="scss" scoped>
.card__picture {
    position: absolute;
    width: 375px;
    height: 375px;
    top: 50%;
    left: 50%;
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
    &-enter {
        transform: translateY(50px);
    }
}
.slide-next {
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
$animation-delays: (
    1: 0.1s,
    2: 0.2s,
    3: 0.3s,
    4: 0.4s,
);
@each $index, $delay in $animation-delays {
    .animated-#{$index} {
        transition-delay: $delay;
    }
}
.dots {
    display: block;
    width: 100%;
    text-align: center;
    bottom: 20px;

    li {
        width: 6px;
        height: 6px;
        border-radius: 3px;
        background: red;
        opacity: 0.2;
        display: inline-block;
        margin: 0 3px;
        cursor: pointer;
        transition: opacity 0.4s ease-in-out,
            width 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

        &.active {
            width: 22px;
            opacity: 1;
        }
    }
}

.dots {
    li.active {
        animation: updown 2s linear;
    }
}
@keyframes updown {
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
    100% {
        transform: translateY(0);
    }
}
</style>
