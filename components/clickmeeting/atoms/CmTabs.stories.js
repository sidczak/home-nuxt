import CmTabs from "./CmTabs";
import { alignHValues, navTypeValues } from "@helpers/componentsUtils";

const generateTabs = (count) => {
    const tabs = [];
    for (let i = 0; i < count; i++) {
        tabs.push({
            value: i,
            name: `Tab ${i}`,
        });
    }
    return tabs;
};

export default {
    title: "Clickmeeting/Atoms/CmTabs",
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
            :tile="tile"
        />`,
});

export const Basic = Template.bind({});

Basic.args = {
    tabs: [{ name: "All" }, { name: "Skuteczność" }, { name: "Podgląd" }],
};

export const TabsScroll = Template.bind({});

TabsScroll.args = {
    tabs: generateTabs(24),
    tile: false,
};
