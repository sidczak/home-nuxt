import WelcomeFull from "./WelcomeFull";

export default {
    title: "Welcome/WelcomeFull",
    component: WelcomeFull,
    parameters: {
        backgrounds: {
            default: "twitter",
            values: [
                { name: "twitter", value: "#00aced" },
                { name: "facebook", value: "#3b5998" },
            ],
        },
    },
};

const Template = (args, { argTypes }) => ({
    components: { WelcomeFull },
    props: Object.keys(argTypes),
    template: "<WelcomeFull/>",
});

export const Basic = Template.bind({});

Basic.args = {};
