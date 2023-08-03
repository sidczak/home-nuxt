import SliderPlus from "./SliderPlus";

export default {
    title: "Common/SliderPlus",
    component: SliderPlus,
};

const Template = (args, { argTypes }) => ({
    components: { SliderPlus },
    props: Object.keys(argTypes),
    template: "<SliderPlus />",
});

export const Basic = Template.bind({});

Basic.args = {};
