import Welcome from "./Welcome";

export default {
    title: "Welcome/Welcome",
    component: Welcome,
    parameters: {
        backgrounds: {
            default: 'twitter',
            values: [
                { name: 'twitter', value: '#00aced' },
                { name: 'facebook', value: '#3b5998' },
            ],
    },
  },
};

const Template = (args, { argTypes }) => ({
    components: { Welcome },
    props: Object.keys(argTypes),
    template: "<Welcome />",
});

export const Basic = Template.bind({});

Basic.args = {
    title: "Welcome",
};
