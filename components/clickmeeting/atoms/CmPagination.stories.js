import CmPagination from "./CmPagination";

export default {
    title: "Atoms/CmPagination",
    component: CmPagination,
    argTypes: {},
};

const Template = (args, { argTypes }) => ({
    components: { CmPagination },
    props: Object.keys(argTypes),
    template: `<CmPagination
        :currentPage="currentPage"
        :totalRows="totalRows"
        :rowsPerPage="rowsPerPage"
        :maxVisiblePages="maxVisiblePages"
        :firstNumber="firstNumber"
        :lastNumber="lastNumber"
    />`,
});

export const Basic = Template.bind({});

Basic.args = {
    currentPage: 15,
    totalRows: 200,
    rowsPerPage: 10,
};

const TemplateEmitValue = (args, { argTypes }) => ({
    components: { CmPagination },
    props: Object.keys(argTypes),
    methods: {
        onInput(value) {
            console.log("This is emmited value: ", value);
        },
    },
    template: `<CmPagination
        :currentPage="currentPage"
        :totalRows="totalRows"
        :rowsPerPage="rowsPerPage"
        :maxVisiblePages="maxVisiblePages"
        :firstNumber="firstNumber"
        :lastNumber="lastNumber"
        @input="onInput"
    />`,
});

export const EmitValue = TemplateEmitValue.bind({});

EmitValue.args = {
    currentPage: 15,
    totalRows: 200,
    rowsPerPage: 10,
};

const TemplateFilledSlots = (args, { argTypes }) => ({
    components: { CmPagination },
    props: Object.keys(argTypes),
    template: `<CmPagination
            :currentPage="currentPage"
            :totalRows="totalRows"
            :rowsPerPage="rowsPerPage"
            :maxVisiblePages="maxVisiblePages"
            :firstNumber="firstNumber"
            :lastNumber="lastNumber"
            lastText="⏭">
            <template #first-text><span class="text-success">First</span></template>
            <template #prev-text><span class="text-danger">Prev</span></template>
            <template #next-text><span class="text-warning">Next</span></template>
            <template #ellipsis-text><span class="text-dark">* * *</span></template>
        </CmPagination>
        `,
});

export const FilledSlots = TemplateFilledSlots.bind({});

FilledSlots.args = {
    currentPage: 15,
    totalRows: 200,
    rowsPerPage: 10,
    firstNumber: true,
    lastNumber: true,
};
