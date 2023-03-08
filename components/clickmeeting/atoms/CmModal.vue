<template lang="pug">
    div(v-if='modalVisible' :style='computedVisible')
        .modal-backdrop.fade(:class='{ show: modalContentVisible }')
        .modal.fade.d-block(:class='{ show: modalContentVisible }')
            .modal-dialog(:class='[modalSize, modalCentered, modalScrollable]')
                .modal-content(:class='contentClass')
                    header.modal-header(v-if='!hideHeader')
                        slot(name='modal-header')
                            slot(name='title')
                                .modal__title.d-flex.align-items-center
                                    //- MainSvgIcon.title__icon.mr-2(
                                    //-     v-if='iconName'
                                    //-     :icon='iconName'
                                    //-     :color='iconColor'
                                    //-     :colorMode='iconColorMode'
                                    //-     :type='iconType'
                                    //-     size='20'
                                    //- )
                                    .title__title(v-html='title')
                                .modal__search.ml-auto(v-if='hasSearch')
                                    MainInputExpandable(
                                        :value='search'
                                        @input='onSearchInput'
                                        @click:close='hideSearchInput'
                                    )
                                .modal__close(@click='onCloseClicked')
                                    //- MainSvgIcon(icon='default/modal-close-8')
                                    | x
                    .modal-body(:class='bodyClass')
                        slot(name='default')
                            div(v-html='desc')
                    footer.modal-footer(
                        v-if='!hideFooter'
                        :class='footerClass'
                    )
                        slot(name='modal-footer')
                            //- cm-button(
                            //-     color='primary'
                            //-     @click='onOkClicked'
                            //-     :title='translatedKeys.btnOk'
                            //- )
                            //- cm-button(
                            //-     color='secondary'
                            //-     @click='onCancelClicked'
                            //-     :title='translatedKeys.btnCancel'
                            //- )
</template>

<script>
// import { svgAttributes, availableBsSizes } from "@helpers/componentsUtils";
// import { colorValidator, modeColorValidator } from "@helpers/exportedColors";
// import MainSvgIcon from "@components/common/MainSvgIcon";
// import MainInputExpandable from "@components/common/MainInputExpandable";

const TRANSLATION_KEYS = {
    btnOk: "vap.common.modal.btn_ok",
    btnCancel: "vap.common.modal.btn_cancel",
};

export default {
    components: {
        // MainSvgIcon,
        // MainInputExpandable,
        // CmButton: () => import("@components/atoms/CmButton"),
    },
    model: {
        prop: "visible",
    },
    props: {
        title: {
            type: String,
            default: null,
        },
        desc: {
            type: String,
            default: null,
        },
        hideHeader: {
            type: Boolean,
            default: false,
        },
        hideFooter: {
            type: Boolean,
            default: false,
        },
        size: {
            type: String,
            default: "md",
            // validator: (v) => availableBsSizes.includes(v),
        },
        centered: {
            type: Boolean,
            default: true,
        },
        visible: {
            type: Boolean,
            default: false,
        },
        scrollable: {
            type: Boolean,
            default: true,
        },
        bodyClass: {
            type: String,
            default: null,
        },
        iconName: {
            type: String,
            default: null,
        },
        iconType: {
            type: String,
            default: "stroke",
            // validator: (v) => svgAttributes.includes(v),
        },
        iconColor: {
            type: String,
            default: null,
            // validator: colorValidator,
        },
        iconColorMode: {
            type: String,
            default: null,
            // validator: modeColorValidator,
        },
        contentClass: {
            type: String,
            default: null,
        },
        footerClass: {
            type: String,
            default: null,
        },
        hasSearch: {
            type: Boolean,
            default: false,
        },
        search: {
            type: String,
            default: "",
        },
    },
    data() {
        return {
            translatedKeys: {
                btnOk: this.$t(TRANSLATION_KEYS.btnOk),
                btnCancel: this.$t(TRANSLATION_KEYS.btnCancel),
            },
            isSearchInputVisible: false,
            modalVisible: false,
            modalContentVisible: false,
        };
    },

    computed: {
        modalSize() {
            return `modal-${this.size}`;
        },
        modalCentered() {
            return this.centered ? "modal-dialog-centered" : null;
        },
        modalScrollable() {
            return this.scrollable ? "modal-dialog-scrollable" : null;
        },
        computedVisible() {
            return this.visible ? "position: absolute; z-index: 1040" : null;
        },
    },
    watch: {
        visible(newValue) {
            this.showModal(newValue);
        },
    },
    mounted() {
        this.showModal(this.visible);
    },
    methods: {
        onCloseClicked() {
            this.showModal(false);
            this.$emit("closeClicked");
        },
        onOkClicked() {
            this.showModal(false);
            this.$emit("okClicked");
        },
        onCancelClicked() {
            this.showModal(false);
            this.$emit("cancelClicked");
        },
        showModal(value) {
            setTimeout(
                () => {
                    this.modalVisible = value;
                },
                value ? 0 : 600
            );
            setTimeout(() => {
                this.modalContentVisible = value;
            }, 300);
            this.$emit("input", value);
        },
        async showSearchInput() {
            this.isSearchInputVisible = true;
            await this.$nextTick();
            this.$refs?.searchInput?.$el.querySelector("input").focus();
        },
        hideSearchInput() {
            this.isSearchInputVisible = false;
            this.onSearchInput("");
        },
        onSearchInput(value) {
            this.$emit("update:search", value);
        },
    },
};
</script>

<style lang="scss" scoped>
.modal-backdrop.show {
    opacity: 1;
}
.modal-content {
    // background-color: var(--bg-4-color);
    border: none;
    border-radius: 15px;
    // box-shadow: 0 20px 55px rgba(var(--font-1-color), 0.5);
    .modal-body:first-child {
        padding-top: 30px;
    }
    .modal-body:last-child {
        padding-bottom: 30px;
    }
}
.modal-header {
    border-top-right-radius: 14px;
    border-top-left-radius: 14px;
    padding: 30px 30px 15px;
    border-bottom: none;
    // color: var(--font-1-color);
    font: {
        weight: 500;
        size: 21px;
    }
    line-height: 28px;
    .modal__title {
        margin-right: 15px;
        overflow: hidden;
        .title__title {
            flex: 1;
        }
        .title__icon {
            margin-left: 0;
            cursor: default;
        }
    }
}
.modal__close {
    position: relative;
    cursor: pointer;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    margin-left: 5px;
    flex: 0 0 auto;
    // @include transitionMode(background-color);
    svg {
        // @include setSvg(14px, var(--font-1-color), 1px);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    &:hover {
        // background-color: var(--hover-color);
        background-color: $clouds;
    }
}

.modal-body {
    padding: 15px 30px;
    // color: var(--font-2-color);
    font: {
        weight: 400;
        size: 14px;
    }
    line-height: 20px;
}
.modal-footer {
    padding: 15px 30px 30px;
    border-top: none;
}
.modal-backdrop {
    background-color: rgba($dark, 0.9);
}
.dark-mode {
    .modal-backdrop {
        background-color: rgba($dark, 0.9);
    }
}
</style>
