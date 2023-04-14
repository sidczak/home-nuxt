<template lang="pug">
    .dropdown.btn-group(:class='[{ dropleft, dropright, dropup }, computedShow]')
        b-button.dropdown-toggle(
            :disabled='disabled'
            role='button'
            :class='toggleClass'
            @click='toggleDropdown'
            :variant='color'
            :size='size'
            :tag='toggleTag'
        )
            slot(name='button-content')
                span(data-test-id='dropdown-content-text' v-text='text')
        transition(name='fade' mode='in-out')
            ul.dropdown-menu(
                v-show='isShow'
                tabindex='-1'
                :class='[computedRight, computedShow, menuClass]'
                @click='closeDropdown'
            )
                slot(v-if='!lazy || isShow')
</template>

<script>
import { colorsNames } from "@helpers/exportedColors";
import { isButtonColorValid } from "@helpers/validators";
import { buttonBsSizes } from "@helpers/componentsUtils";

export default {
    props: {
        text: {
            type: String,
            default: null,
        },
        color: {
            type: String,
            default: "primary",
            validator: (v) => isButtonColorValid(v, colorsNames),
        },
        size: {
            type: String,
            default: "lg",
            validator: (value) =>
                buttonBsSizes.includes(value) || null === value,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        right: {
            type: Boolean,
            default: false,
        },
        dropleft: {
            type: Boolean,
            default: false,
        },
        dropright: {
            type: Boolean,
            default: false,
        },
        dropup: {
            type: Boolean,
            default: false,
        },
        lazy: {
            type: Boolean,
            default: false,
        },
        menuClass: {
            type: String,
            default: null,
        },
        toggleClass: {
            type: String,
            default: null,
        },
        toggleTag: {
            type: String,
            default: "button",
        },
    },
    data() {
        return {
            isShow: false,
        };
    },
    computed: {
        computedRight() {
            return this.right ? `dropdown-menu-right` : "";
        },
        computedShow() {
            return this.isShow ? "show" : "";
        },
    },
    mounted() {
        document.addEventListener("click", this.handleClickOutside);
        this.checkPosition();
    },
    beforeDestroy() {
        document.removeEventListener("click", this.handleClickOutside);
    },
    updated() {
        this.checkPosition();
    },
    methods: {
        handleClickOutside(event) {
            if (!this.$el.contains(event.target)) {
                this.closeDropdown();
            }
        },
        toggleDropdown() {
            this.isShow = !this.isShow;
        },
        closeDropdown() {
            this.isShow = false;
        },
        checkPosition() {
            const dropdownEl = this.$el;
            const menuEl = this.$el.querySelector(".dropdown-menu");

            const positions = [
                {
                    condition:
                        this.dropup &&
                        dropdownEl.getBoundingClientRect().bottom <
                            menuEl.clientHeight,
                    remove: "dropup",
                },
                {
                    condition:
                        this.dropleft &&
                        dropdownEl.getBoundingClientRect().left <
                            menuEl.clientWidth,
                    remove: "dropleft",
                    add: "dropright",
                },
                {
                    condition:
                        this.dropright &&
                        dropdownEl.getBoundingClientRect().left >
                            menuEl.clientWidth,
                    remove: "dropright",
                    add: "dropleft",
                },
                {
                    condition:
                        !this.dropup &&
                        dropdownEl.getBoundingClientRect().top >
                            menuEl.clientHeight,
                    add: "dropup",
                },
            ];

            positions.forEach(({ condition, remove, add }) => {
                if (condition) {
                    dropdownEl.classList.remove(remove);
                    if (add) dropdownEl.classList.add(add);
                }
            });
        },
    },
};
</script>
<style lang="scss" scoped>
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
</style>
