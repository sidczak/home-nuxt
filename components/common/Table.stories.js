import {
    generateColumns,
    generateRows,
} from "@helpers/MainDataTableDataGenerator";
import { getPageRows, sortRows } from "@helpers/MainDataTableHelpers";
import Table from "./Table";

export default {
    title: "Common/Table",
    component: Table,
};

const serverSideColumns = generateColumns(5);
const serverSideRows = generateRows(20, serverSideColumns);

const Template = (args, { argTypes }) => ({
    components: { Table },
    props: Object.keys(argTypes),
    mounted() {
        this.getData();
    },
    watch: {
        sort: {
            handler() {
                this.getData(true);
            },
            deep: true,
        },
        // currentPage() {
        //     this.getData();
        // },
        // rowsPerPage() {
        //     this.getData(true);
        // },
    },
    methods: {
        async getData(shouldResetPage) {
            const { currentPage, rowsPerPage, sort } = this;
            this.currentPage = shouldResetPage ? 1 : currentPage;
            const rows = await this.fakeApiCall(currentPage, rowsPerPage, sort);
            this.rows = rows;
        },
        fakeApiCall(page, rowsPerPage, sort) {
            return new Promise((resolve) => {
                this.isLoading = true;
                let items = [...serverSideRows];
                if (sort && sort.columnName) {
                    items = sortRows(items, sort.columnName, sort.order);
                }
                items = getPageRows(items, page, rowsPerPage);
                setTimeout(() => {
                    resolve(items);
                    this.isLoading = false;
                }, 500);
            });
        },
    },
    template:
        '<Table :columns="columns" :rows="rows" :isLoading="isLoading" :sort.sync="sort"/>',
});

export const Basic = Template.bind({});

Basic.args = {
    columns: serverSideColumns,
    rows: serverSideRows,
    // currentPage: 1,
    // totalRows: serverSideRows.length,
    // rowsPerPage: 25,
    // showFooter: true,
    isLoading: false,
    sort: { columnName: null, order: "default" },
};
