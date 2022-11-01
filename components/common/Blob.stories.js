import Blob from "./Blob";

export default {
    title: "Common/Blob",
    component: Blob,
};

const Template = (args, { argTypes }) => ({
    components: { Blob },
    props: Object.keys(argTypes),
    template: "<Blob/>",
});

export const BlobFill = Template.bind({});
BlobFill.args = {};

export const BlobStroke = Template.bind({});
BlobStroke.args = {};
