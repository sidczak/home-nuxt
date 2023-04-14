import CmDropdown from "./CmDropdown";
import CmDropdownItem from "./CmDropdownItem";
import CmDropdownText from "./CmDropdownText";
import CmDropdownHeader from "./CmDropdownHeader";
import CmDropdownDivider from "./CmDropdownDivider";

export default {
    title: "Atoms/CmDropdown",
    component: CmDropdown,
    argTypes: {},
};

const Template = (args, { argTypes }) => ({
    components: {
        CmDropdown,
        CmDropdownItem,
        CmDropdownText,
        CmDropdownHeader,
        CmDropdownDivider,
    },
    props: Object.keys(argTypes),
    template: `
        <CmDropdown 
            :text="text" 
            :color="color" 
            :size="size" 
            :disabled="disabled" 
            :right="right" 
            :dropleft="dropleft" 
            :dropright="dropright" 
            :dropup="dropup" 
            :lazy="lazy"
            :menuClass="menuClass"
            :toggleClass="toggleClass"
            :toggleTag="toggleTag">
            <CmDropdownItem href="#">EN</CmDropdownItem>
            <CmDropdownItem href="#">ES</CmDropdownItem>
            <CmDropdownItem href="#">RU</CmDropdownItem>
            <CmDropdownItem href="#">FA</CmDropdownItem>
            <CmDropdownDivider></CmDropdownDivider>
            <CmDropdownHeader id="dropdown-header-1">Groups</CmDropdownHeader>
            <CmDropdownText>And this is more example text.</CmDropdownText>
            <CmDropdownDivider></CmDropdownDivider>
            <CmDropdownItem active>Active action</CmDropdownItem>
            <CmDropdownItem disabled>Disabled action</CmDropdownItem>
        </CmDropdown>`,
});

export const Primary = Template.bind({});

Primary.args = {
    text: "Button text via Prop",
};

const TemplateFilledSlots = (args, { argTypes }) => ({
    components: { CmDropdown, CmDropdownItem },
    props: Object.keys(argTypes),
    template: `
        <CmDropdown>
            <template #button-content>
                Custom Content with&nbsp;<em>HTML</em>&nbsp;via Slot
            </template>
            <CmDropdownItem href="#">EN</CmDropdownItem>
            <CmDropdownItem href="#">ES</CmDropdownItem>
            <CmDropdownItem href="#">RU</CmDropdownItem>
            <CmDropdownItem href="#">FA</CmDropdownItem>
        </CmDropdown>`,
});

export const FilledSlots = TemplateFilledSlots.bind({});

FilledSlots.args = {};
