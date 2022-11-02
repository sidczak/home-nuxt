import BlobPattern from "./BlobPattern";

export default {
    title: "Common/BlobPattern",
    component: BlobPattern,
};

const Template = (args, { argTypes }) => ({
    components: { BlobPattern },
    props: Object.keys(argTypes),
    template:
        '<BlobPattern :type="type" :shadow="shadow" :strokeWidth="strokeWidth"/>',
});

export const BlobFill = Template.bind({});
BlobFill.args = {
    type: "fill",
    shadow: true,
};

export const BlobStroke = Template.bind({});
BlobStroke.args = {
    type: "stroke",
    strokeWidth: 1,
};
