<template lang="pug">
.main-data-table
    .table(:class='{ loading: isLoading }')
        .table__headers.d-flex
            .table__header.d-flex.flex-1.align-items-center.px-3(
                v-for='column in computedColumns'
                :key='column.name'
                @click='!column.disableSort && !column.hideHeader ? updateSort(column.name) : undefined'
                :class='[column.class, column.justifyClass, { "table__header--sortable": !column.disableSort && !column.hideHeader }]'
            )
                slot(:name='column.headerSlotName')
                    span.table__text(v-if='!column.hideHeader') {{ column.label }} {{sort.order}}
                font-awesome-icon.ml-2.table__icon(
                    v-if='!column.disableSort && !column.hideHeader' 
                    :icon="['fas', columnsSortIconsState[column.name]]" 
                    :class='{ "table__icon--hoverable": columnsSortIconHoverable[column.name] }' 
                    fixed-width
                )
        .table__body
            .table__rows
                .table__row.d-flex(v-for='(row, index) in rows')
                    | {{index +1}}
                    slot(name='row' :data='row')
                        .table__cell.px-3.flex-1.d-flex.flex-wrap(
                            v-for='column in computedColumns'
                            :class='[column.justifyClass, column.cellClass]'
                        )
                            slot(:name='column.rowSlotName' :data='row')
                                //- span(v-html='row[column.name]')
                                span(v-safe-html="row[column.name].toString()")
    //- .table__footer.px-3(v-if='showFooter && !$slots.footer')
    //-     slot(name='footer')
    //-         Pagination(
    //-             :totalRows='totalRows'
    //-             :currentPage='currentPage'
    //-             :rowsPerPage='rowsPerPage'
    //-             @input='$emit("update:currentPage", $event)'
    //-             @update:rowsPerPage='$emit("update:rowsPerPage", $event)'
    //-         )
    //- MainSpinner(v-if='isLoading' centered color='cm')
</template>
<script>
export default {
    props: {
        /**
         *  Array of objects.
         * @param {Object[]} columns - Table columns.
         * @param {string} columns[].label - The label displayed in column header.
         * @param {string} columns[].name - Name used to define solots. Must be unique.
         * @param {string|string[]} [columns[].class] - Class attached to header.
         * @param {string|string[]} [columns[].cellClass] - Class attached to cell.
         * @param {boolean} [columns[].disableSort] - Should disable sorting for column.
         * @param {boolean} [columns[].hideHeader] - Should hide header.
         * @param {('start'|'center'|'end')} [columns[].align='start'] - Position of column content.
         **/
        columns: {
            type: Array,
            required: true,
        },
        rows: {
            type: Array,
            required: true,
        },
        itemKey: {
            type: String,
            default: "id",
        },
        showFooter: {
            type: Boolean,
            default: true,
        },
        currentPage: {
            type: Number,
            default: 1,
        },
        totalRows: {
            type: Number,
            default: 0,
        },
        rowsPerPage: {
            type: Number,
            default: 25,
        },
        isLoading: {
            type: Boolean,
            default: true,
        },
        sort: {
            type: Object,
            required: true,
            validator: (v) =>
                "order" in v &&
                "columnName" in v &&
                ["default", "desc", "asc"].includes(v.order),
        },
    },
    computed: {
        computedColumns() {
            return this.columns.map((column) => ({
                ...column,
                headerSlotName: `header:${column.name}`,
                rowSlotName: `row:${column.name}`,
                justifyClass: `justify-content-${column.align || "start"}`,
            }));
        },
        columnsSortIconsState() {
            const state = {};
            this.computedColumns.forEach((column) => {
                state[column.name] =
                    !column.disableSort && !column.hideHeader
                        ? this.getSortIcon(column.name)
                        : undefined;
            });
            return state;
        },
        columnsSortIconHoverable() {
            const state = {};
            this.computedColumns.forEach((column) => {
                state[column.name] =
                    !column.disableSort && !column.hideHeader
                        ? column.name !== this.sort.columnName
                        : true;
            });
            return state;
        },
    },
    methods: {
        getSortState(columnName) {
            if (this.sort.columnName === columnName) {
                if ("asc" === this.sort.order) {
                    return {
                        columnName,
                        order: "desc",
                    };
                }
                return {
                    columnName: null,
                    order: "default",
                };
            }
            return {
                columnName,
                order: "asc",
            };
        },
        updateSort(columnName) {
            this.$emit("update:sort", this.getSortState(columnName));
        },
        getSortIcon(columnName) {
            if (
                this.sort.columnName === columnName &&
                "desc" === this.sort.order
            ) {
                return "caret-down";
            }
            return "caret-up";
        },
    },
};
</script>
<style lang="scss" scoped>
.main-data-table {
    background-color: $clouds;
    position: relative;
    border-radius: 10px;
}
.table {
    font-size: 14px;
    &.loading {
        opacity: 0.3;
        pointer-events: none;
        user-select: none;
    }
}
.table__header {
    height: 40px;
    &--sortable {
        cursor: pointer;
    }
    &:hover {
        .table__icon--hoverable {
            opacity: 1 !important;
        }
    }
}
.table__icon--hoverable {
    opacity: 0;
}
.table__row {
    position: relative;
    border-bottom: 1px solid $silver;
}
.flex-1 {
    flex: 1;
}
</style>
