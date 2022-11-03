import Wave from "./Wave";
import colors from "@exports/colors.scss";

export default {
    title: "Common/Wave",
    component: Wave,
    argTypes: {
        shape: {
            control: {
                type: "select",
                options: ["wave", "peak"],
            },
        },
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
    components: { Wave },
    props: Object.keys(argTypes),
    template: `<Wave 
            :shape="shape"
            :duration="duration"
            :fillOpacity="fillOpacity"
            :gradientColorStart="gradientColorStart" 
            :gradientColorEnd="gradientColorEnd"
        />`,
});

export const WaveColor = Template.bind({});
WaveColor.args = {
    duration: 5,
    fillOpacity: 0.8,
};

export const WaveGradient = Template.bind({});
WaveGradient.args = {
    gradientColorStart: "orange",
    gradientColorEnd: "alizarin",
};

export const PeakGradient = Template.bind({});
PeakGradient.args = {
    shape: "peak",
    gradientColorStart: "amethyst",
    gradientColorEnd: "belize-hole",
};
