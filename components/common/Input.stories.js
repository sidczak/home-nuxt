import Input from "./Input";

export default {
    title: "Common/Input",
    component: Input,
    argTypes: {},
};

const Template = (args, { argTypes }) => ({
    components: { Input },
    props: Object.keys(argTypes),
    template: `<Input/>`,
});

export const Basic = Template.bind({});
Basic.args = {};
