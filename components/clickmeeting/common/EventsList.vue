<template lang="pug">
div
    Table(
        :isLoading='isLoading'
        :rows='events'
        :columns='columns'
        :sort.sync='sort'
        :rowClass='["align-items-center", "table__row--events"]'
    )
        //- template(#header:action='')
            MainInputExpandable(v-model='search' @click:close='search = ""')
        template(#row:date='{ row }')
            //- EventsListItemDate(v-bind='row')
            | {{row.accessType}}
        //- template(#row:name='{ row }')
        //-     EventsListItemName(
        //-         v-bind='row'
        //-         :eventDetails='row.actionUrls.details'
        //-     )
        template(#row:action='{ row }')
            EventsListItemAction(v-bind='row')
</template>

<script>
import Table from "@components/clickmeeting/common/Table";
import EventsListItemAction from "@components/clickmeeting/common/EventsListItemAction";

export default {
    components: {
        Table,
        EventsListItemAction,
    },
    data() {
        return {
            columns: [
                {
                    name: "date",
                    label: "columnDate",
                },
                {
                    name: "name",
                    label: "columnName",
                    width: 4,
                },
                {
                    name: "action",
                    disableSort: true,
                    align: "end",
                    cellClass: ["overflow-visible"],
                },
            ],
            events: require("../../../data/events"),
            currentPage: 1,
            totalRows: undefined,
            rowsPerPage: 25,
            isLoading: false,
            sort: { columnName: "date", order: "asc" },
            search: "",
        };
    },
    computed: {
        // computedEvents() {
        //     const { data } = require("../../../data/events");
        //     this.events = data;
        //     return this.events;
        // },
    },
    watch: {
        sort: {
            deep: true,
            handler() {
                this.getData(true);
            },
        },
    },
    mounted() {},
    methods: {},
};
</script>

<style scoped lang="scss"></style>
