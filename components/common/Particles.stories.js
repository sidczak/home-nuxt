import Particles from "./Particles";

export default {
    title: "Common/Particles",
    component: Particles,
    argTypes: {},
};

const Template = (args, { argTypes }) => ({
    components: { Particles },
    props: Object.keys(argTypes),
    template: `<Particles/>`,
});

export const Basic = Template.bind({});
Basic.args = {};
