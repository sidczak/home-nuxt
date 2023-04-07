import CmAccordion from "./CmAccordion";

export default {
    title: "Atoms/CmAccordion",
    component: CmAccordion,
};

const Template = (args, { argTypes }) => ({
    components: { CmAccordion },
    props: Object.keys(argTypes),
    template: "<CmAccordion />",
});

export const Basic = Template.bind({});

Basic.args = {};
