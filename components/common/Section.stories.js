import Section from "./Section";

export default {
    title: "Common/Section",
    component: Section,
};

const Template = (args, { argTypes }) => ({
    components: { Section },
    props: Object.keys(argTypes),
    template: '<Section :title="title" :subtitle="subtitle" :desc="desc"/>',
});

export const Basic = Template.bind({});

Basic.args = {
    title: "Welcome",
};
