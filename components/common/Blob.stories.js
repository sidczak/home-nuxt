import Blob from "./Blob";
import colors from "@exports/colors.scss";

export default {
    title: "Common/Blob",
    component: Blob,
    argTypes: {
        gradientColorStart: {
            control: {
                type: "select",
                options: Object.keys(colors),
            },
        },
        gradientColorEnd: {
            control: {
                type: "select",
                options: Object.keys(colors),
            },
        },
    },
};

const Template = (args, { argTypes }) => ({
    components: { Blob },
    props: Object.keys(argTypes),
    template: `<Blob 
            :type="type" 
            :shadow="shadow" 
            :strokeWidth="strokeWidth" 
            :gradientColorStart="gradientColorStart" 
            :gradientColorEnd="gradientColorEnd"
        />`,
});

export const BlobFillColorShadow = Template.bind({});
BlobFillColorShadow.args = {
    type: "fill",
    shadow: true,
};

export const BlobFillGradientShadow = Template.bind({});
BlobFillGradientShadow.args = {
    type: "fill",
    gradientColorStart: "orange",
    gradientColorEnd: "alizarin",
    shadow: true,
};

export const BlobStrokeGradient = Template.bind({});
BlobStrokeGradient.args = {
    type: "stroke",
    gradientColorEnd: "wet-asphalt",
    strokeWidth: 3,
};
