import CmTabs from "./CmTabs";
import { alignHValues, navTypeValues } from "@helpers/componentsUtils";

const generateTabs = (count) => {
    const tabs = [];
    for (let i = 0; i < count; i++) {
        tabs.push({
            name: `Tab ${i}`,
        });
    }
    return tabs;
};

export default {
    title: "Atoms/CmTabs",
    component: CmTabs,
    argTypes: {
        alignH: {
            control: {
                type: "select",
                options: alignHValues,
            },
        },
        navType: {
            control: {
                type: "select",
                options: [false, ...navTypeValues],
            },
        },
    },
};

const Template = (args, { argTypes }) => ({
    components: { CmTabs },
    props: Object.keys(argTypes),
    template: `<CmTabs
            :fill="fill"
            :justified="justified"
            :card="card"
            :alignH="alignH"
            :navType="navType"
            :tabs="tabs"
            :value="value"
            :tile="tile"
            :lazy="lazy"
        />`,
});

export const Basic = Template.bind({});

Basic.args = {
    tabs: [{ name: "All" }, { name: "Skuteczność" }, { name: "Podgląd" }],
};

export const TabsScroll = Template.bind({});

TabsScroll.args = {
    tabs: generateTabs(24),
    value: 2,
    tile: false,
};

const TemplateFilledSlots = (args, { argTypes }) => ({
    components: { CmTabs },
    props: Object.keys(argTypes),
    template: `<CmTabs
            :fill="fill"
            :justified="justified"
            :card="card"
            :alignH="alignH"
            :navType="navType"
            :tabs="tabs"
            :value="value"
            :tile="tile"
            :lazy="lazy"
        >
            <template #first>
                I'm the first tab
            </template>
            <template #second>
                I'm the second tab
            </template>
            <template #third>
                I'm the third tab
            </template>
        </CmTabs>
        `,
});

export const FilledSlots = TemplateFilledSlots.bind({});

FilledSlots.args = {
    tabs: [
        {
            name: "First",
            componentSlug: "first",
        },
        {
            name: "Second",
            componentSlug: "second",
        },
        {
            name: "Third",
            componentSlug: "third",
        },
    ],
    value: 1,
};

const TemplateEmitValue = (args, { argTypes }) => ({
    components: { CmTabs },
    props: Object.keys(argTypes),
    methods: {
        onInput(value) {
            console.log("This is emmited value: ", value);
        },
    },
    template: `<CmTabs
            :fill="fill"
            :justified="justified"
            :card="card"
            :alignH="alignH"
            :navType="navType"
            :tabs="tabs"
            :value="value"
            :tile="tile"
            :lazy="lazy"
            @input="onInput"
        >
            <template #first>
                I'm the first tab
            </template>
            <template #second>
                I'm the second tab
            </template>
            <template #third>
                I'm the third tab
            </template>
        </CmTabs>
        `,
});
export const EmitValue = TemplateEmitValue.bind({});

EmitValue.args = {
    tabs: [
        {
            name: "First",
            componentSlug: "first",
        },
        {
            name: "Second",
            componentSlug: "second",
        },
        {
            name: "Third",
            componentSlug: "third",
        },
    ],
};
