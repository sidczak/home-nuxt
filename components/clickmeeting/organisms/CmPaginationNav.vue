<template lang="pug">
        b-row(align-v='center')
            b-col.mr-auto(lg='6' offset-lg='3')
                .d-flex.justify-content-center.align-items-center
                    cm-pagination.mb-0.mx-3(
                        @input='onPaginationInput'
                        :currentPage='localCurrentPage'
                        :totalRows='totalRows'
                        :rowsPerPage='localRowsPerPage'
                    )
                    .pagination__input-wrap(v-if='showGoToPage')
                        .pagination__label go to page
                        .pagination__input
                            b-form-input.pagination__input-control(
                                @keyup.enter='goToPage'
                                @keypress='onlyNumber'
                                v-model.number='inputLocalCurrentPage'
                            )
                            .pagination__input-icon.pagination__input-icon--next-page(
                                @click='goToPage'
                            )
                                //- svg-icon(name='default/arrow-angle-right-14')
                                span >
            b-col.text-center.text-lg-right(
                v-if='showChangeRowsPerPageElement'
                cols='12'
                lg='auto'
            )
                .pagination__input-wrap
                    .pagination__label rows per page
                    b-dropdown.pagination__dropdown(
                        toggle-tag='div'
                        variant='link'
                        menu-class='pagination__dropdown-menu'
                        toggle-class='text-decoration-none'
                        no-caret
                        dropup
                    )
                        template(#button-content='')
                            .pagination__input
                                .pagination__input-control
                                    | {{ localRowsPerPage }}
                                .pagination__input-icon
                                    svg-icon(name='default/arrow-up-down-14')
                        b-dropdown-item(
                            v-for='(item, index) in availableRowsPerPage'
                            :key='index'
                            @click='numberRecordsPerPage(item)'
                        )
                            .d-flex.justify-content-between.align-items-center
                                | {{ item }}
                                .pagination__dropdown-item-icon(v-if='localRowsPerPage === item') ok
                                //- svg-icon.pagination__dropdown-item-icon(
                                //-     v-if='localRowsPerPage === item'
                                //-     name='default/tick-8'
                                //- )
</template>

<script>
import CmPagination from "@components/clickmeeting/atoms/CmPagination.vue";

export default {
    name: "Pagination",
    components: {
        CmPagination,
    },
    props: {
        currentPage: {
            type: Number,
            required: true,
        },
        totalRows: {
            type: Number,
            required: true,
        },
        rowsPerPage: {
            type: Number,
            required: true,
        },
        firstNumber: {
            type: Boolean,
            default: true,
        },
        lastNumber: {
            type: Boolean,
            default: true,
        },
        showGoToPage: {
            type: Boolean,
            default: true,
        },
        showChangeRowsPerPageElement: {
            type: Boolean,
            default: true,
        },
        availableRowsPerPage: {
            type: Array,
            default: () => [10, 25, 50, 100],
        },
    },
    data() {
        return {
            localCurrentPage: this.currentPage,
            inputLocalCurrentPage: this.currentPage,
            localRowsPerPage: this.rowsPerPage,
        };
    },
    watch: {
        currentPage(newVal) {
            this.localCurrentPage = newVal;
        },
        rowsPerPage(newVal) {
            this.localRowsPerPage = newVal;
        },
    },
    methods: {
        onPaginationInput(value) {
            this.localCurrentPage = Number(value);
            this.inputLocalCurrentPage = this.localCurrentPage;
            this.setCurrentPage(this.localCurrentPage);
        },
        getCurrentPage() {
            if (
                !this.inputLocalCurrentPage ||
                1 === this.inputLocalCurrentPage ||
                0 === this.totalRows
            ) {
                return 1;
            }
            const maxNumberPages = Math.ceil(
                this.totalRows / this.localRowsPerPage
            );
            if (this.inputLocalCurrentPage > maxNumberPages) {
                return maxNumberPages;
            }
            return this.inputLocalCurrentPage;
        },
        goToPage() {
            this.localCurrentPage = this.getCurrentPage();
            this.inputLocalCurrentPage = this.localCurrentPage;
            this.setCurrentPage(this.localCurrentPage);
        },
        setCurrentPage(value) {
            this.$emit("input", Number(value));
        },
        onlyNumber($event) {
            if (!/\d/.test($event.key)) {
                return event.preventDefault();
            }
        },
        numberRecordsPerPage(item) {
            this.localCurrentPage = 1;
            this.inputLocalCurrentPage = 1;
            this.localRowsPerPage = item;
            this.setCurrentPage(this.localCurrentPage);
        },
    },
};
</script>

<style lang="scss" scoped>
.pagination {
    &__input-wrap {
        white-space: nowrap;
        font: {
            weight: 500;
            size: 12px;
        }
        .btn {
            padding: 0 !important;
        }
    }
    &__label {
        display: inline-block;
        margin-right: 10px;
    }
    &__input {
        position: relative;
        display: inline-block;
        &:hover {
            .pagination__input-control {
                border-color: black;
            }
        }
    }
    &__input-control {
        border-radius: 5px;
        border: 1px solid red;
        width: 70px;
        padding: 0 20px 0 10px;
        height: 30px;
        text-align: left;
        font-size: 14px;
        line-height: 29px;
        cursor: pointer;
        outline: none;
    }
    &__input-icon {
        position: absolute;
        width: 16px;
        height: 16px;
        top: 50%;
        right: 5px;
        transform: translateY(-50%);
        cursor: pointer;
        span {
            position: absolute;
            width: 16px;
            height: 16px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            line-height: 15px;
            text-align: center;
            // @include setSvg(16px, var(--font-2-color));
        }
        &--next-page {
            // svg {
            //     @include setSvg(8px, var(--font-1-color), 3px);
            // }
            &:before {
                content: "";
                border-radius: 100%;
                position: absolute;
                height: 16px;
                width: 16px;
                top: 0;
                left: 0;
            }
            &:hover:before {
                background-color: gray;
            }
        }
    }
    &__dropdown-item-icon {
        // @include setSvgFill(8px, var(--font-1-color));
    }
    &__dropdown {
        /deep/ &.dropup .dropdown-toggle::after {
            content: none;
        }
        /deep/ .btn {
            padding: 0;
        }
    }
    /deep/ &__dropdown-menu {
        min-width: 70px;
        padding: 5px;
        .dropdown-item {
            font-size: 14px;
            padding: 10px;
            &:hover {
                border-radius: 5px;
            }
        }
    }
}
</style>
