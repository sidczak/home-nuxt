<template lang="pug">
    .carousel(
        :class='computedBg'
        @mouseover='toggle(false)'
        @mouseleave='toggle(true)'
    )
        //- 2. indicators - odpowiednia animacja prawo lewo
        //- 3. transition-group - rozkmina
        //- 4. Zamienić index na slug
        //- 6. Napisać testy

        //- transition-group(
        //-     :name='transitionName'
        //-     tag='div'
        //-     :class='carouselInner'
        //- )
        //-     CmCarouselSlide(
        //-         v-for='(item, index) in items'
        //-         v-if='index === current'
        //-         :key='index'
        //-         :active='index === current'
        //-         :imgSrc='imgSrc'
        //-         :caption='item.name'
        //-         :text='item.name'
        //-     )
        .carousel-inner
            transition(:name='transitionName' :mode='transitionMode')
                template(v-for='(item, index) in items')
                    .carousel-item(
                        v-if='index === current'
                        :key='index'
                        :class='{ active: index === current }'
                    )
                        slot(:name='item.componentSlug')
                            CmCarouselSlide(
                                :imgSrc='item.imgSrc'
                                :caption='item.caption'
                                :text='item.text'
                            )
        a.carousel-control-prev(
            v-if='controls'
            role='button'
            @click='slide(-1)'
        )
            span.carousel-control-prev-icon(aria-hidden='true')
        a.carousel-control-next(
            v-if='controls'
            role='button'
            @click='slide(1)'
        )
            span.carousel-control-next-icon(aria-hidden='true')
        ol.carousel-indicators(v-if='indicators')
            li(
                v-for='(item, index) in items'
                :class='{ active: index === current }'
                @click='slideIndicators(index)'
            )
</template>

<script>
// import { colorsNames } from "@helpers/exportedColors";
import CmCarouselSlide from "./CmCarouselSlide";

export default {
    components: {
        CmCarouselSlide,
    },
    props: {
        controls: {
            type: Boolean,
            default: true,
        },
        indicators: {
            type: Boolean,
            default: false,
        },
        backgroundColor: {
            type: String,
            default: "bg-success",
            // validator: (value) => colorsNames.includes(value),
        },
        intervalDelay: {
            type: Number,
            default: 3000,
        },
        fade: {
            type: Boolean,
            default: false,
        },
        pauseOnHover: {
            type: Boolean,
            default: true,
        },
        items: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            current: 0,
            toggleTimer: true,
            transitionName: "slide-next",
            transitionMode: "",
            interval: null,
        };
    },
    computed: {
        computedBg() {
            return `bg-${this.backgroundColor}`;
        },
    },
    mounted() {
        this.autoPlay();
    },
    methods: {
        slide(dir) {
            this.autoPlay();
            if (this.fade) {
                this.transitionName = "fade";
                this.transitionMode = "out-in";
            } else {
                1 === dir
                    ? (this.transitionName = "slide-next")
                    : (this.transitionName = "slide-prev");
            }
            var len = this.items.length;
            this.current = (this.current + (dir % len) + len) % len;
        },
        toggle(value) {
            if (!this.pauseOnHover) {
                return;
            }
            this.toggleTimer = value;
        },
        autoPlay() {
            clearInterval(this.interval);
            this.interval = setInterval(() => {
                if (this.toggleTimer) this.slide(1);
            }, this.intervalDelay);
        },
        slideIndicators(index) {
            if (this.current > index) {
                this.transitionName = "slide-prev";
            } else {
                this.transitionName = "slide-next";
            }
            this.current = index;
        },
    },
};
</script>
<style lang="scss" scoped>
.carousel-control-prev,
.carousel-control-next {
    width: 74px;
    // @include sm {
    //     width: 45px;
    // }
}
.carousel-control-prev-icon,
.carousel-control-next-icon {
    width: 44px;
    height: 44px;
    background-color: $dark;
    border-radius: 50%;
    background-size: 11px 20px;
    // @include sm {
    //     width: 30px;
    //     height: 30px;
    //     background-size: 8px 14px;
    // }
}
.carousel-control-prev-icon {
    background-image: url("data:image/svg+xml,%3Csvg width='11' height='21' viewBox='0 0 11 21' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M10.7218 0.81016C11.1028 1.20999 11.0875 1.84297 10.6877 2.22396L2.00237 10.5L10.6877 18.776C11.0875 19.157 11.1028 19.79 10.7218 20.1898C10.3408 20.5897 9.70786 20.605 9.30803 20.224L0.60803 11.934L0.593671 11.92C0.406215 11.7341 0.257427 11.5129 0.155888 11.2692C0.0543495 11.0254 0.0020752 10.764 0.0020752 10.5C0.0020752 10.236 0.0543495 9.97457 0.155888 9.73085C0.257427 9.48713 0.406215 9.26593 0.593671 9.08L0.60803 9.06604L9.30803 0.776042C9.70786 0.395053 10.3408 0.410328 10.7218 0.81016Z' fill='%23A7AFC6'/%3E%3C/svg%3E%0A");
}
.carousel-control-next-icon {
    background-image: url("data:image/svg+xml,%3Csvg width='11' height='21' viewBox='0 0 11 21' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0.278117 0.81016C0.659107 0.410328 1.29209 0.395053 1.69192 0.776042L10.3919 9.06604L10.4063 9.08C10.5937 9.26592 10.7425 9.48712 10.8441 9.73085C10.9456 9.97457 10.9979 10.236 10.9979 10.5C10.9979 10.764 10.9456 11.0254 10.8441 11.2692C10.7425 11.5129 10.5937 11.7341 10.4063 11.92L9.70207 11.21L10.3919 11.934L1.69192 20.224C1.29209 20.605 0.659107 20.5897 0.278117 20.1898C-0.102872 19.79 -0.0875971 19.157 0.312235 18.776L8.99758 10.5L0.312235 2.22396C-0.0875971 1.84297 -0.102872 1.20999 0.278117 0.81016Z' fill='%23A7AFC6'/%3E%3C/svg%3E%0A");
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
.slide-next {
    &-leave-active,
    &-enter-active {
        transition: all 0.5s ease-in-out;
    }
    &-enter,
    &-leave-to {
        opacity: 0.3;
    }
    &-enter {
        transform: translateX(100%);
    }
    &-leave-to {
        transform: translateX(-100%);
    }
}
.slide-prev {
    &-leave-active,
    &-enter-active {
        transition: all 0.5s ease-in-out;
    }
    &-enter,
    &-leave-to {
        opacity: 0.3;
    }
    &-enter {
        transform: translateX(-100%);
    }
    &-leave-to {
        transform: translateX(100%);
    }
}
</style>
