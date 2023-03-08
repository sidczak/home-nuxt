import CmModal from "./CmModal";
// import { svgAttributes, availableBsSizes } from "@helpers/componentsUtils";
// import { colorsNames, modeColorsNames } from "@helpers/exportedColors";

export default {
    title: "Atoms/CmModal",
    component: CmModal,
    argTypes: {
        // size: {
        //     control: {
        //         type: "select",
        //         options: availableBsSizes,
        //     },
        // },
        // iconType: {
        //     control: {
        //         type: "select",
        //         options: svgAttributes,
        //     },
        // },
        // iconColor: {
        //     control: {
        //         type: "select",
        //         options: [null, ...colorsNames],
        //     },
        // },
        // iconColorMode: {
        //     control: {
        //         type: "select",
        //         options: [null, ...modeColorsNames],
        //     },
        // },
    },
};

const Template = (args, { argTypes }) => ({
    components: { CmModal },
    props: Object.keys(argTypes),
    template: `
        <CmModal 
            :visible="visible"
            :title="title" 
            :desc="desc" 
            :size="size"
            :centered="centered"
            :hideHeader="hideHeader"
            :hideFooter="hideFooter"
            :iconName="iconName"
            :iconType="iconType"
            :iconColor="iconColor"
            :iconColorMode="iconColorMode"
            :scrollable="scrollable"
            :bodyClass="bodyClass"
            :contentClass="contentClass"
            :footerClass="footerClass"
            :hasSearch="hasSearch"
        />`,
});

export const Basic = Template.bind({});

Basic.args = {
    visible: true,
    iconName: "default/arrow-rise-14",
    title:
        "Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur.",
    desc:
        "Curabitur in elementum mauris. Duis faucibus tempus est sed mattis. Etiam ultricies venenatis convallis. Nam felis velit, tristique volutpat ullamcorper at, porta ac massa. Fusce mattis est leo, ac semper dui accumsan id. Suspendisse potenti. Fusce in augue purus. Maecenas vel tortor lacus. Phasellus sagittis malesuada ante, at rhoncus diam elementum eget. Praesent lorem magna, elementum in vestibulum ac, blandit ut massa. Donec id placerat justo.",
    size: "lg",
    iconColorMode: "font-1-color",
};

export const Scrollable = Template.bind({});

Scrollable.args = {
    visible: true,
    title: "Modal Scrollable",
    desc:
        "Curabitur in elementum mauris. Duis faucibus tempus est sed mattis. Etiam ultricies venenatis convallis. Nam felis velit, tristique volutpat ullamcorper at, porta ac massa. Fusce mattis est leo, ac semper dui accumsan id. Suspendisse potenti. Fusce in augue purus. Maecenas vel tortor lacus. Phasellus sagittis malesuada ante, at rhoncus diam elementum eget. Praesent lorem magna, elementum in vestibulum ac, blandit ut massa. Donec id placerat justo. Curabitur maximus neque id odio fringilla viverra. Nulla luctus consectetur urna, maximus luctus neque vulputate ac. Curabitur in elementum mauris. Duis faucibus tempus est sed mattis. Etiam ultricies venenatis convallis. Nam felis velit, tristique volutpat ullamcorper at, porta ac massa. Fusce mattis est leo, ac semper dui accumsan id. Suspendisse potenti. Fusce in augue purus. Maecenas vel tortor lacus. Phasellus sagittis malesuada ante, at rhoncus diam elementum eget. Praesent lorem magna, elementum in vestibulum ac, blandit ut massa. Donec id placerat justo. Curabitur maximus neque id odio fringilla viverra. Nulla luctus consectetur urna, maximus luctus neque vulputate ac. Curabitur in elementum mauris. Duis faucibus tempus est sed mattis. Etiam ultricies venenatis convallis. Nam felis velit, tristique volutpat ullamcorper at, porta ac massa. Fusce mattis est leo, ac semper dui accumsan id. Suspendisse potenti. Fusce in augue purus. Maecenas vel tortor lacus. Phasellus sagittis malesuada ante, at rhoncus diam elementum eget. Praesent lorem magna, elementum in vestibulum ac, blandit ut massa. Donec id placerat justo. Curabitur maximus neque id odio fringilla viverra. Nulla luctus consectetur urna, maximus luctus neque vulputate ac. Curabitur in elementum mauris. Duis faucibus tempus est sed mattis. Etiam ultricies venenatis convallis. Nam felis velit, tristique volutpat ullamcorper at, porta ac massa. Fusce mattis est leo, ac semper dui accumsan id. Suspendisse potenti. Fusce in augue purus. Maecenas vel tortor lacus. Phasellus sagittis malesuada ante, at rhoncus diam elementum eget. Praesent lorem magna, elementum in vestibulum ac, blandit ut massa. Donec id placerat justo. Curabitur maximus neque id odio fringilla viverra. Nulla luctus consectetur urna, maximus luctus neque vulputate ac.",
};
