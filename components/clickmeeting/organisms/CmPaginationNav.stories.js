import CmPaginationNav from "@components/clickmeeting/organisms/CmPaginationNav";

export default {
    title: "Organisms/CmPaginationNav",
    component: CmPaginationNav,
};

const Template = (args, { argTypes }) => ({
    name: "PaginationSB",
    components: { CmPaginationNav },
    props: Object.keys(argTypes),
    template: `<CmPaginationNav 
        :currentPage.sync="currentPage" 
        :totalRows="totalRows" 
        :rowsPerPage="rowsPerPage"
        :firstNumber="firstNumber" 
        :lastNumber="lastNumber" 
        :showGoToPage="showGoToPage" 
        :showChangeRowsPerPageElement="showChangeRowsPerPageElement"
        :availableRowsPerPage="availableRowsPerPage"
        :maxVisiblePages="maxVisiblePages"/>`,
});

export const Primary = Template.bind({});

Primary.args = {
    currentPage: 15,
    totalRows: 200,
    rowsPerPage: 10,
    firstNumber: true,
    lastNumber: true,
    showGoToPage: true,
    showChangeRowsPerPageElement: true,
    availableRowsPerPage: [10, 20, 50, 100],
};
