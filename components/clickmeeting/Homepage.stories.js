import Homepage from "./Homepage";

export default {
    title: "Clickmeeting/Homepage",
    component: Homepage,
};

const Template = (args, { argTypes }) => ({
    components: { Homepage },
    props: Object.keys(argTypes),
    template: "<Homepage />",
});

export const Basic = Template.bind({});

Basic.args = {};
