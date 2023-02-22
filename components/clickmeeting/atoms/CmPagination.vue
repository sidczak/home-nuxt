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
        template(v-if='showLeftEllipsis')
            li.page-item(:class='{ disabled: isInFirstPage }')
                button.page-link(type='button' @click='gotoPageNumber(1)') 1
            li.page-item.disabled
                span.page-link
                    slot(name='ellipsis-text') &mldr;
        li.page-item(
            v-for='(page, index) in pages'
            :key='`page_${index}`'
            :class='{ active: page === activePage }'
        )
            button.page-link(type='button' @click='gotoPageNumber(page)') {{ page }}
        template(v-if='showRightEllipsis')
            li.page-item.disabled
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
		maxVisiblePages: {
			type: Number,
			default: 1,
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
		showLeftEllipsis() {
			// return 3 < this.activePage && 5 < this.totalPages;
			return (
				2 + this.maxVisiblePages < this.activePage &&
				4 + this.maxVisiblePages < this.totalPages
			);
		},
		showRightEllipsis() {
			// return this.activePage < this.totalPages - 2 && 5 < this.totalPages;
			return (
				this.activePage <
					this.totalPages - (1 + this.maxVisiblePages) &&
				4 + this.maxVisiblePages < this.totalPages
			);
		},
		pages() {
			const range = [];
			let startPage = 1;
			let endPage = this.totalPages;

			// if (5 < this.totalPages) {
			//     if (
			//         3 < this.activePage &&
			//         this.activePage < this.totalPages - 2
			//     ) {
			//         startPage = this.activePage - 1;
			//         endPage = this.activePage + 1;
			//     } else if (3 >= this.activePage) {
			//         endPage = 5;
			//     } else {
			//         startPage = this.totalPages - 4;
			//     }
			// }

			if (4 + this.maxVisiblePages < this.totalPages) {
				if (
					2 + this.maxVisiblePages < this.activePage &&
					this.activePage <
						this.totalPages - (1 + this.maxVisiblePages)
				) {
					startPage = this.activePage - this.maxVisiblePages;
					endPage = this.activePage + this.maxVisiblePages;
				} else if (2 + this.maxVisiblePages >= this.activePage) {
					endPage = 4 + this.maxVisiblePages;
				} else {
					startPage = this.totalPages - (3 + this.maxVisiblePages);
				}
			}

			for (let i = startPage; i <= endPage; i++) {
				range.push(i);
			}

			return range;
		},
		totalPages() {
			return Math.ceil(this.totalRows / this.rowsPerPage);
		},
	},
	// watch: {
	//     currentPage(newVal) {
	//         this.activePage = newVal;
	//     },
	// },
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
