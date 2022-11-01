import BlobImage from "./BlobImage";

export default {
    title: "Common/BlobImage",
    component: BlobImage,
};

const Template = (args, { argTypes }) => ({
    components: { BlobImage },
    props: Object.keys(argTypes),
    template: "<BlobImage/>",
});

export const Basic = Template.bind({});
Basic.args = {};

