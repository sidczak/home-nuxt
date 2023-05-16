import CmPopover from "./CmPopover.vue";
import CmButton from "./CmButton.vue";

export default {
    title: "Atoms/CmPopover",
    component: CmPopover,
    argTypes: {
        placement: {
            control: {
                type: "select",
                options: ["top", "right", "bottom", "left", "auto"],
            },
        },
        trigger: {
            control: {
                type: "select",
                options: ["click", "hover"],
            },
        },
    },
};

const TemplateDirective = (args, { argTypes }) => ({
    components: { CmPopover, CmButton },
    props: Object.keys(argTypes),
    template: `<div>
        <CmButton v-cm-popover.click.bottom="'I am popover directive content!'" popoverTitle="Popover Title">
            Click Me (directive)
        </CmButton>

        <CmButton v-cm-popover="'I am popover directive content!'" popoverTitle="Popover Title">
            Hover Me (directive)
        </CmButton>
    </div>`,
});

export const PopoverDirective = TemplateDirective.bind({});

PopoverDirective.args = {};

const TemplateComponent = (args, { argTypes }) => ({
    components: { CmPopover, CmButton },
    props: Object.keys(argTypes),
    template: `<div>
        <CmButton id="popover-target-click">
            Click Me (component)
        </CmButton>
        <CmPopover target="popover-target-click" :popoverTitle="popoverTitle" trigger="click" placement="bottom">
            I am popover <b>component</b> content!
        </CmPopover>
        <CmButton id="popover-target-hover">
            Hover Me (component)
        </CmButton>
        <CmPopover target="popover-target-hover" :popoverTitle="popoverTitle" trigger="hover" placement="right">
            I am popover <b>component</b> content!
        </CmPopover>
    </div>`,
});

export const PopoverComponent = TemplateComponent.bind({});

PopoverComponent.args = {
    popoverTitle: "Popover Title",
};
