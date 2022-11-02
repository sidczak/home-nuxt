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
        '<BlobPattern :stroke="stroke" :strokeWidth="strokeWidth" :pattern="pattern"/>',
});

export const BlobPatternBasic = Template.bind({});
BlobPatternBasic.args = {};

export const BlobPatternStroke = Template.bind({});
BlobPatternStroke.args = {
    stroke: true,
    strokeWidth: 1,
    pattern: "waves",
};
