import CardCredit from "./CardCredit";

export default {
    title: "Common/CardCredit",
    component: CardCredit,
    argTypes: {},
};

const Template = (args, { argTypes }) => ({
    components: { CardCredit },
    props: Object.keys(argTypes),
    template: `<div class="m-5"><CardCredit/></div>`,
});

export const Basic = Template.bind({});
Basic.args = {};
