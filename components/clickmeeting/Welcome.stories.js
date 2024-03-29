import Welcome from "./Welcome";

export default {
    title: "Clickmeeting/Welcome",
    component: Welcome,
};

const Template = (args, { argTypes }) => ({
    components: { Welcome },
    props: Object.keys(argTypes),
    template: "<Welcome />",
});

export const Basic = Template.bind({});

Basic.args = {};
