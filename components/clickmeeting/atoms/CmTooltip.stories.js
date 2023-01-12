import CmTooltip from "./CmTooltip.vue";
import { positions } from "@helpers/componentsUtils";

export default {
    title: "Atoms/CmTooltip",
    component: CmTooltip,
    argTypes: {
        position: {
            control: {
                type: "select",
                options: positions,
            },
        },
    },
};

const TemplateContentAsProp = (args, { argTypes }) => ({
    components: { CmTooltip },
    props: Object.keys(argTypes),
    template: `<CmTooltip :position="position" :closeDelay="closeDelay" :content="content">
            <template #activator>
                <span style="margin-top: 100px;">This tooltip's content is passed as prop</span>
            </template>
        </CmTooltip>`,
});

export const ContentAsProp = TemplateContentAsProp.bind({});

ContentAsProp.args = {
    position: "right",
    closeDelay: 100,
    content: "<h1>Content as prop</h1>",
};

const TemplateContentAsSlot = (args, { argTypes }) => ({
    components: { CmTooltip },
    props: Object.keys(argTypes),
    template: `
        <CmTooltip :position="position" :closeDelay="closeDelay">
            CmImage
            <template #activator>
                <span style="margin-top: 100px;">This tooltip is used with content as slot</span>
            </template>
        </CmTooltip>
        `,
});

export const ContentAsSlot = TemplateContentAsSlot.bind({});

ContentAsSlot.args = {
    position: "bottom",
    closeDelay: 100,
};

const TemplateMultiple = (args, { argTypes }) => ({
    components: { CmTooltip },
    props: Object.keys(argTypes),
    template: `
        <div style="margin-top: 100px; display: flex;">
            <CmTooltip :position="postionTop" :closeDelay="closeDelay" style="flex: 1;">
                <div>Top Tooltip</div>
                <template #activator>
                    <span>Top Tooltip Activator</span>
                </template>
            </CmTooltip>
            <CmTooltip :position="postionRight" :closeDelay="closeDelay" style="flex: 1;">
                <div>Right Tooltip</div>
                <template #activator>
                    <span>Right Tooltip Activator</span>
                    </template>
            </CmTooltip>
            <CmTooltip :position="positionBottom" :closeDelay="closeDelay" style="flex: 1;">
                <div>Bottom Tooltip</div>
                <template #activator>
                    <span>Bottom Tooltip Activator</span>
                </template>
            </CmTooltip>
            <CmTooltip :position="positionLeft" :closeDelay="closeDelay" style="flex: 1;">
                <div>Left Tooltip</div>
                <template #activator>
                    <span>Left Tooltip Activator</span>
                    </template>
            </CmTooltip>
        </div>
    `,
});

export const Multiple = TemplateMultiple.bind({});

Multiple.args = {
    postionTop: "top",
    postionRight: "right",
    positionBottom: "bottom",
    positionLeft: "left",
    closeDelay: 100,
    showOnStart: false,
};

const TemplateDirective = (args, { argTypes }) => ({
    components: { CmTooltip },
    props: Object.keys(argTypes),
    template: `
        <div id="id" style="height: 200px;" >
            <a href="clickmeeting.com" v-cm-tooltip:[closeDelay]="content">
                Link
            </a>
        </div>
    `,
});

export const Directive = TemplateDirective.bind({});

Directive.args = {
    position: "right",
    closeDelay: 100,
    content: "this is tooltip content :)",
};

const TemplateDirectiveObject = (args, { argTypes }) => ({
    components: { CmTooltip },
    props: Object.keys(argTypes),
    computed: {
        directiveValue() {
            const { position, closeDelay, content } = this;
            return {
                position,
                closeDelay,
                content,
            };
        },
    },
    template: `
        <div id="id" style="height: 200px;">
            <a href="clickmeeting.com" v-cm-tooltip="directiveValue">
                Link
            </a>
        </div>
    `,
});

export const DirectiveObject = TemplateDirectiveObject.bind({});

DirectiveObject.args = {
    position: "right",
    closeDelay: 100,
    content: "I love tooltips (:",
};
