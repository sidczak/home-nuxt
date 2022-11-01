import Blob from "./Blob";

export default {
    title: "Common/Blob",
    component: Blob,
};

const Template = (args, { argTypes }) => ({
    components: { Blob },
    props: Object.keys(argTypes),
    template:
        '<Blob :type="type" :shadow="shadow" :strokeWidth="strokeWidth"/>',
});

export const BlobFill = Template.bind({});
BlobFill.args = {
    type: "fill",
    shadow: true,
};

export const BlobStroke = Template.bind({});
BlobStroke.args = {
    type: "stroke",
    strokeWidth: 10,
};
