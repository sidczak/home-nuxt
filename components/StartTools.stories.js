import StartTools from "./StartTools";

export default {
    title: "Start/StartTools",
    component: StartTools,
};

const Template = (args, { argTypes }) => ({
    components: { StartTools },
    props: Object.keys(argTypes),
    template: "<StartTools />",
});

export const Basic = Template.bind({});

Basic.args = {
    title: "Welcome",
};
