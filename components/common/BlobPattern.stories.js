import BlobPattern from "./BlobPattern";

export default {
    title: "Common/BlobPattern",
    component: BlobPattern,
    argTypes: {
        pattern: {
            control: {
                type: "select",
                options: ["pattern1", "pattern2", "pattern3", "waves"],
            },
        },
    },
};

const Template = (args, { argTypes }) => ({
    components: { BlobPattern },
    props: Object.keys(argTypes),
    template:
        '<BlobPattern :type="type" :strokeWidth="strokeWidth" :pattern="pattern"/>',
});

export const BlobFill = Template.bind({});
BlobFill.args = {
    type: "fill",
};

export const BlobStroke = Template.bind({});
BlobStroke.args = {
    type: "stroke",
    strokeWidth: 1,
    pattern: "waves",
};
