import BlobPattern from "./BlobPattern";
import colors from "@exports/colors.scss";

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
        strokeColor: {
            control: {
                type: "select",
                options: Object.keys(colors),
            },
        },
        patternColor: {
            control: {
                type: "select",
                options: Object.keys(colors),
            },
        },
    },
};

const Template = (args, { argTypes }) => ({
    components: { BlobPattern },
    props: Object.keys(argTypes),
    template: `<BlobPattern 
            :stroke="stroke" 
            :strokeColor="strokeColor" 
            :strokeWidth="strokeWidth" 
            :pattern="pattern" 
            :patternColor="patternColor" 
            :patternRotate="patternRotate"
        />`,
});

export const BlobPatternBasic = Template.bind({});
BlobPatternBasic.args = {};

export const BlobPatternStroke = Template.bind({});
BlobPatternStroke.args = {
    stroke: true,
    strokeWidth: 3,
    pattern: "waves",
};
