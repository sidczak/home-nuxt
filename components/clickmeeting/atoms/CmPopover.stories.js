import CmPopover from "./CmPopover.vue";
import CmButton from "./CmButton.vue";

export default {
    title: "Atoms/CmPopover",
    component: CmPopover,
    argTypes: {},
};

const Template = (args, { argTypes }) => ({
    components: { CmPopover, CmButton },
    props: Object.keys(argTypes),
    template: `<div>
        <CmButton v-cm-popover.click.top="'I am popover directive content!'" data-title="Popover Title">
            Hover Me (directive)
        </CmButton>

        <CmButton v-cm-popover="'I am popover directive content!'" data-title="Popover Title">
            Hover Me (directive)
        </CmButton>

        <CmButton id="popover-target-1">
            Hover Me (component)
        </CmButton>
        <CmPopover target="popover-target-1" triggers="click" title="Popover title">
            I am popover <b>component</b> content!
        </CmPopover>

        <CmButton id="popover-target-2">
            xHover Me (component)
        </CmButton>
        <CmPopover target="popover-target-2" triggers="click" title="xPopover title">
            xI am popover <b>component</b> content!
        </CmPopover>
    </div>`,
});

export const Primary = Template.bind({});
Primary.args = {};
