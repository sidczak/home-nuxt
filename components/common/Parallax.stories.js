import Parallax from "./Parallax";

export default {
    title: "Common/Parallax",
    component: Parallax,
    argTypes: {},
};

const Template = (args, { argTypes }) => ({
    components: { Parallax },
    props: Object.keys(argTypes),
    template: `<Parallax/>`,
});

export const Basic = Template.bind({});
Basic.args = {};
