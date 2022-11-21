<template lang="pug">
section.d-flex.flex-shrink-0.align-items-center.section-py-80(:class="[{'section-min-h-100': minHeight, 'animated': scrolled}, typeAnimation]")
    slot(v-if="noBody" name="content")
    b-container(v-else)
        b-row.justify-content-center.mb-2
            b-col.text-center(md="6")
                h2 {{title}}
                h3 {{subtitle}}
                p.mb-0(v-if="desc" v-html="desc")
        slot(name="content")
</template>
<script>
export default {
    props: {
        noBody: {
            type: Boolean,
            default: false,
        },
        onAnimation: {
            type: Boolean,
            default: false,
        },
        typeAnimation: {
            type: String,
            default: null,
            validator: (value) =>
                ["blur", "tada"].includes(value) || null === value,
        },
        title: {
            type: String,
            default: null,
        },
        subtitle: {
            type: String,
            default: null,
        },
        desc: {
            type: String,
            default: null,
        },
        minHeight: {
            type: Boolean,
            default: true,
        },
    },
    data() {
        return {
            scrolled: false,
            // sectionPosition: 0,
        };
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
        this.handleScroll(); // ustawi scrolled=true dla pierwszej sekcji.
    },
    destroyed() {
        window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
        handleScroll() {
            const section = this.$el;
            // const scrollStart = section.offsetTop - 200;
            // const scrollStart = section.offsetTop - (window.innerHeight * 0.75); // 25% wczytanej sekcji
            // const scrollStart = section.offsetTop - (window.innerHeight * 50/100); // 50% wczytanej sekcji
            const scrollStart = section.offsetTop - window.innerHeight / 2; // 50% wczytajej sekcji
            // this.sectionPosition = window.scrollY - section.offsetTop;

            if (this.onAnimation && scrollStart <= window.scrollY) {
                this.scrolled = true;
            } else {
                this.scrolled = false;
            }
        },
    },
};
</script>
<style lang="scss" scoped>
@import "~sass-rem";
$rem-fallback: false;
section {
    position: relative;
    // @include rem(padding, 6px 30px);
    // font-size: rem(11px);
    &.tada {
        opacity: 0;
        transition: all 0.5s;
        &.animated {
            opacity: 1;
        }
    }
    &.blur {
        opacity: 0;
        filter: blur(5px);
        transition: all 0.5s;
        &.animated {
            opacity: 1;
            filter: blur(0);
        }
    }
}
.section {
    &-pt-152 {
        padding-top: rem(152px);
    }
    &-py-80,
    &-pt-80 {
        padding-top: rem(80px);
    }
    &-py-80,
    &-pb-80 {
        padding-bottom: rem(80px);
    }
    &-min-h-100 {
        min-height: 100%;
    }
}
</style>
