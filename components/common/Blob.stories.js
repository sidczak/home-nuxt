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

export const Basic = Template.bind({});

Basic.args = {};

export const BlobImage = Template.bind({});

BlobImage.args = {};
