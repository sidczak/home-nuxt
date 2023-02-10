import Slider from "./Slider";

export default {
    title: "Common/Slider",
    component: Slider,
};

const Template = (args, { argTypes }) => ({
    components: { Slider },
    props: Object.keys(argTypes),
    template: "<Slider />",
});

export const Basic = Template.bind({});

Basic.args = {};
