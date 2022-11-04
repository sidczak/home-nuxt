import BlobImage from "./BlobImage";

export default {
    title: "Common/BlobImage",
    component: BlobImage,
};

const Template = (args, { argTypes }) => ({
    components: { BlobImage },
    props: Object.keys(argTypes),
    template: '<BlobImage :image="image" :shadow="shadow"/>',
});

export const BlobImageBasic = Template.bind({});
BlobImageBasic.args = {};

export const BlobImageShadow = Template.bind({});
BlobImageShadow.args = {
    image: "animals/fox-600x600.jpeg",
    shadow: true,
};
