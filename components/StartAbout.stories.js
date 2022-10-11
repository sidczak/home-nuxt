import StartAbout from "./StartAbout";

export default {
    title: "Start/StartAbout",
    component: StartAbout,
};

const Template = (args, { argTypes }) => ({
    components: { StartAbout },
    props: Object.keys(argTypes),
    template: "<StartAbout />",
});

export const Basic = Template.bind({});

Basic.args = {
    title: "Welcome",
};
