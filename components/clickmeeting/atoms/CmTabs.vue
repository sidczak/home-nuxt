<template lang="pug">
    .tabs__wrapper(:class='{ tile }')
        .tabs__scroller
            ul.nav(
                role='tablist'
                :class='[{ "nav-fill": fill, "nav-justified": justified, "card-header-tabs": card }, navTypeClass, alignHClass]'
            )
                cm-tab(
                    v-for='(tab, index) in tabs'
                    :key='tab.componentSlug'
                    :title='tab.name'
                    :active='activeTab === index'
                    @clickTab='selectTab(index)'
                )
            .tabs__arrow-left(v-show='arrow.left')
                .tabs__arrow(@click='scrollLeft')
                    | &lt;
                    //- svg-icon(name='default/arrow-left-14')
            .tabs__arrow-right(v-show='arrow.right')
                .tabs__arrow(@click='scrollRight')
                    | &gt;
                    //- svg-icon(name='default/arrow-right-14')
        .tab-content
            .tab-pane(
                v-for='(tab, index) in tabs'
                :key='tab.componentSlug'
                role='tabpanel'
                :class='[{ active: activeTab === index }]'
            )
                slot(:name='tab.componentSlug')
</template>

<script>
import {
    alignHValues,
    getAlignClass,
    navTypeValues,
    // eslint-disable-next-line comma-dangle
    getNavTypeClass,
} from "@helpers/componentsUtils";
import CmTab from "./CmTab";
export default {
    components: {
        CmTab,
    },
    props: {
        fill: {
            type: Boolean,
            default: false,
        },
        justified: {
            type: Boolean,
            default: false,
        },
        card: {
            type: Boolean,
            default: false,
        },
        alignH: {
            type: String,
            default: null,
            validator: (v) => alignHValues.includes(v) || null === v,
        },
        navType: {
            type: String,
            default: "tabs",
            validator: (v) => navTypeValues.includes(v) || null === v,
        },
        tabs: {
            type: Array,
            default: () => [],
        },
        value: {
            type: Number,
            default: 0,
        },
        // value: {
        //     type: String,
        //     default: null,
        // },
        tile: {
            type: Boolean,
            default: true,
        },
    },
    data() {
        return {
            activeTab: 0,
            // Kiedy zamiast index mamy tab.componentSlug
            // zmienia się również props value na string
            // activeTab: this.tabs?.[0]?.componentSlug,
            // activeTab: this.tabs && this.tabs[0] ? this.tabs[0].componentSlug : undefined,
            arrow: {
                right: false,
                left: false,
            },
        };
    },
    computed: {
        alignHClass() {
            return getAlignClass(this.alignH, "justify-content");
        },
        navTypeClass() {
            if (!this.navType) return "";
            return `nav-${this.navType}`;
            // return getNavTypeClass(this.navType, "nav");
        },
    },
    // created() {
    //     this.activeTab = this.value;
    //     // Kiedy value jest stingiem a index zmienimy na tab.componentSlug
    //     // if (this.value) {
    //     //     this.activeTab = this.value;
    //     // }
    // },
    mounted() {
        window.addEventListener("resize", this.toggleArrows);
        this.navTabs = this.$el.querySelector("ul.nav");
        this.navTabs.addEventListener("scroll", this.toggleArrows);
        setTimeout(this.toggleArrows, 0);
        this.activeTab = this.value;
        // Kiedy value jest stingiem a index zmienimy na tab.componentSlug
        // if (this.value) {
        //     this.activeTab = this.value;
        // }
    },
    destroyed() {
        window.removeEventListener("resize", this.toggleArrows);
        this.navTabs.removeEventListener("scroll", this.toggleArrows);
    },
    methods: {
        selectTab(selectedTab) {
            this.$emit("input", selectedTab);
            this.activeTab = selectedTab;
        },
        toggleArrows() {
            const hasHorizontalScrollbar =
                this.navTabs.clientWidth < this.navTabs.scrollWidth;
            const scrolledFromLeft =
                this.navTabs.offsetWidth + this.navTabs.scrollLeft;
            const scrolledToRight =
                scrolledFromLeft >= this.navTabs.scrollWidth;
            const scrolledToLeft = 0 === this.navTabs.scrollLeft;

            this.arrow.right = hasHorizontalScrollbar && !scrolledToRight;
            this.arrow.left = hasHorizontalScrollbar && !scrolledToLeft;
        },
        scroll(scrollTo) {
            this.navTabs.scrollTo({
                left: this.navTabs.scrollLeft + scrollTo,
                behavior: "smooth",
            });
        },
        scrollLeft() {
            this.scroll(-this.navTabs.clientWidth + 80);
        },
        scrollRight() {
            this.scroll(this.navTabs.clientWidth - 80);
        },
    },
};
</script>
<style lang="scss" scoped>
.tabs__wrapper {
    height: 100%;
    position: relative;
    &.tile {
        .tab-pane {
            height: 198px;
            overflow: auto;
            margin: 0 -25px;
            padding: 20px 25px 0;
        }
        .tabs__scroller {
            margin: 0 -25px;
            padding: 0 15px;
        }
    }
}
.tabs__arrow {
    position: absolute;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    // @include transitionMode(background-color);
    &:hover {
        // background-color: var(--hover-color);
        background-color: red;
        svg {
            fill: var(--font-1-color);
        }
    }
    svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        // @include setSvgFill(14px, var(--font-2-color));
        // @include transitionMode(stroke);
    }
    &-left,
    &-right {
        // background-color: var(--bg-4-color);
        background-color: #fff;
        position: absolute;
        top: 0;
        width: 40px;
        height: 46px;
    }
    &-left {
        left: 0;
    }
    &-right {
        right: 0;
    }
}
.tabs__scroller {
    position: relative;
    overflow-y: hidden;
    height: 47px;
    border-bottom: 1px solid var(--input-color);
    /deep/.nav-tabs {
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        text-align: center;
        white-space: nowrap;
        padding-bottom: 20px;
        .nav-link {
            padding: 12px 15px;
            margin-right: 0;
            font-size: 12px;
            line-height: 20px;
        }
    }
}
</style>
