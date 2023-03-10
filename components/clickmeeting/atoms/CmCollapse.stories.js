import CmCollapse from "./CmCollapse";

export default {
    title: "Atoms/CmCollapse",
    component: CmCollapse,
};

const Template = (args, { argTypes }) => ({
    components: { CmCollapse },
    props: Object.keys(argTypes),
    template: `<CmCollapse
        />`,
});

export const Basic = Template.bind({});

Basic.args = {};
