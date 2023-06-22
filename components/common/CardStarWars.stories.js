import CardStarWars from "./CardStarWars";

export default {
    title: "Common/CardStarWars",
    component: CardStarWars,
    argTypes: {},
};

const Template = (args, { argTypes }) => ({
    components: { CardStarWars },
    props: Object.keys(argTypes),
    template: `<div class="m-5"><CardStarWars/></div>`,
});

export const Basic = Template.bind({});
Basic.args = {};
