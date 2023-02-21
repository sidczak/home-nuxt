<template lang="pug">
    //- https://codepen.io/puncoz/pen/Baozjrw
    //- https://codepen.io/myacode/pen/ZEWjBaQ
    //- xhttps://codepen.io/CodingDeer/pen/VwZrXLe
    //- https://codepen.io/manikanta-vedula/pen/vYGmgRE
    //- https://codepen.io/jnav/pen/VKeKLr
    //- https://codepen.io/frontinorz/pen/wmNoaR
    //- Showing {{ (activePage - 1) * rowsPerPage + 1 }} to {{ activePage * rowsPerPage }} of {{ totalRows }} Entries
    ul.pagination
        li.page-item(v-if='firstNumber' :class='{ disabled: isInFirstPage }')
            button.page-link(type='button' @click='gotoFirst')
                slot(name='first-text') {{ firstText }}
        li.page-item(
            :class='{ "page-arrow": !slotPrevText && !prevText, disabled: isInFirstPage }'
        )
            button.page-link(type='button' @click='gotoPrevious')
                slot(name='prev-text')
                    span(v-if='prevText') {{ prevText }}
                    span(v-else) ‹
        template(v-if='showDots("left")')
            li.page-item(:class='{ disabled: isInFirstPage }')
                button.page-link(type='button' @click='gotoPageNumber(1)') 1
            li.page-item
                span.page-link
                    slot(name='ellipsis-text') &mldr;
        li.page-item(
            v-for='(page, index) in pages'
            :key='`page_${index}`'
            :class='{ active: page === activePage }'
        )
            button.page-link(type='button' @click='gotoPageNumber(page)') {{ page }}
        template(v-if='showDots("right")')
            li.page-item
                span.page-link 
                    slot(name='ellipsis-text') &mldr;
            li.page-item(:class='{ disabled: isInLastPage }')
                button.page-link(
                    type='button'
                    @click='gotoPageNumber(totalPages)'
                ) {{ totalPages }}
        li.page-item(
            :class='{ "page-arrow": !slotNextText && !nextText, disabled: isInLastPage }'
        )
            button.page-link(type='button' @click='gotoNext')
                slot(name='next-text')
                    span(v-if='nextText') {{ nextText }}
                    span(v-else) ›
        li.page-item(v-if='lastNumber' :class='{ disabled: isInLastPage }')
            button.page-link(type='button' @click='gotoLast')
                slot(name='last-text') {{ lastText }}
</template>

<script>
export default {
    props: {
        firstNumber: {
            type: Boolean,
            default: false,
        },
        lastNumber: {
            type: Boolean,
            default: false,
        },
        firstText: {
            type: String,
            default: "«",
        },
        prevText: {
            type: String,
            default: null,
        },
        nextText: {
            type: String,
            default: null,
        },
        lastText: {
            type: String,
            default: "»",
        },
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
        maxVisibleButtons: {
            type: Number,
            default: 3,
        },
    },
    data() {
        return {
            slotPrevText: false,
            slotNextText: false,
            activePage: 1,
        };
    },
    computed: {
        isInFirstPage() {
            return 1 === this.activePage;
        },
        isInLastPage() {
            return this.activePage === this.totalPages;
        },
        pages() {
            const range = [];

            for (let i = this.startPage; i <= this.endPage; i += 1) {
                range.push(i);
            }

            return range;
        },
        startPage() {
            if (1 === this.activePage) {
                return 1;
            }

            if (this.activePage === this.totalPages) {
                return this.totalPages - this.maxVisibleButtons + 1;
            }

            return this.activePage - 1;
        },
        endPage() {
            return Math.min(
                this.startPage + this.maxVisibleButtons - 1,
                this.totalPages
            );
        },
        totalPages() {
            return Math.ceil(this.totalRows / this.rowsPerPage);
        },
    },
    mounted() {
        if (this.$slots["next-text"] && 0 < this.$slots["next-text"].length) {
            this.slotNextText = true;
        }
        if (this.$slots["prev-text"] && 0 < this.$slots["prev-text"].length) {
            this.slotPrevText = true;
        }
        this.activePage = this.currentPage;
    },
    methods: {
        showDots(position = "left") {
            const number = "left" === position ? 1 : this.totalPages;
            const nextNumber = "left" === position ? 2 : this.totalPages - 1;

            return (
                !this.pages.includes(number) || !this.pages.includes(nextNumber)
            );
        },
        gotoFirst() {
            this.gotoPageNumber(1);
        },
        gotoLast() {
            this.gotoPageNumber(this.totalPages);
        },
        gotoPrevious() {
            this.gotoPageNumber(this.activePage - 1);
        },
        gotoNext() {
            this.gotoPageNumber(this.activePage + 1);
        },
        gotoPageNumber(pageNumber) {
            this.activePage = pageNumber;
            this.setValue(this.activePage);
        },
        setValue(value) {
            this.$emit("input", value);
        },
    },
};
</script>
<style lang="scss" scoped>
// .page-link {
//     background-color: transparent;
//     padding: 14px 15px;
//     border: 0;
//     color: var(--font-2-color);
//     line-height: 20px;
//     font: {
//         weight: 500;
//         size: 12px;
//     }
//     &:focus {
//         box-shadow: none;
//     }
//     &:hover {
//         background-color: transparent;
//         border-bottom: 2px solid var(--font-2-color);
//         color: var(--font-1-color);
//     }
// }
// .page-item.disabled .page-link {
//     background-color: transparent;
//     border: 0;
// }
// .page-item.page-arrow {
//     display: flex;
//     align-items: center;

//     .page-link {
//         width: 30px;
//         height: 30px;
//         border-width: 0;
//         border-radius: 50%;
//         @include transitionMode(background-color);
//         &:hover {
//             background-color: var(--hover-color);
//             svg {
//                 fill: var(--font-1-color);
//             }
//         }
//         svg {
//             @include setSvgFill(14px, var(--font-2-color));
//             @include transitionMode(fill);
//             position: absolute;
//             top: 50%;
//             left: 50%;
//             transform: translate(-50%, -50%);
//         }
//     }
// }
// .page-item.disabled .page-link {
//     color: var(--font-2-color);
// }
// .page-item.active .page-link {
//     background-color: transparent;
//     border-bottom: 2px solid $cm;
//     color: var(--font-1-color);
//     &:hover {
//         border-bottom: 2px solid var(--font-2-color);
//     }
// }
</style>
