import Pagination from "./Pagination";

export default {
    title: "Common/Pagination",
    component: Pagination,
    argTypes: {},
};

const Template = (args, { argTypes }) => ({
    components: { Pagination },
    props: Object.keys(argTypes),
    template: `<Pagination
        :currentPage.sync="currentPage"
        :rowsPerPage="rowsPerPage"
        />`,
});

export const Basic = Template.bind({});
Basic.args = {
    currentPage: 3,
    // totalRows: 200,
    rowsPerPage: 5,
};
