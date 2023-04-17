import CmButton from "./CmButton";
import {
    typeAttributes,
    targetAttributes,
    svgAttributes,
    // eslint-disable-next-line comma-dangle
    buttonBsSizes,
} from "@helpers/componentsUtils";
// import { SVG_SIZES } from "@helpers/MainSpinnerConfig";
import { colorsNames, modeColorsNames } from "@helpers/exportedColors";

export default {
    title: "Atoms/CmButton",
    component: CmButton,
    argTypes: {
        type: {
            control: {
                type: "select",
                options: typeAttributes,
            },
        },
        size: {
            control: {
                type: "select",
                options: buttonBsSizes,
            },
        },
        color: {
            control: {
                type: "select",
                options: [...colorsNames, "link"],
            },
        },
        target: {
            control: {
                type: "select",
                options: targetAttributes,
            },
        },
        // spinnerColor: {
        //     control: {
        //         type: "select",
        //         options: colorsNames,
        //     },
        // },
        // spinnerSize: {
        //     control: {
        //         type: "select",
        //         options: Object.keys(SVG_SIZES),
        //     },
        // },
        iconLeftColor: {
            control: {
                type: "select",
                options: [null, ...colorsNames],
            },
        },
        iconLeftColorMode: {
            control: {
                type: "select",
                options: [null, ...modeColorsNames],
            },
        },
        iconLeftType: {
            control: {
                type: "select",
                options: svgAttributes,
            },
        },
        iconRightColor: {
            control: {
                type: "select",
                options: [null, ...colorsNames],
            },
        },
        iconRightColorMode: {
            control: {
                type: "select",
                options: [null, ...modeColorsNames],
            },
        },
        iconRightType: {
            control: {
                type: "select",
                options: svgAttributes,
            },
        },
    },
};

const Template = (args, { argTypes }) => ({
    components: { CmButton },
    props: Object.keys(argTypes),
    template: `<CmButton 
            :tag="tag" 
            :title="title" 
            :type="type" 
            :size="size" 
            :color="color" 
            :disabled="disabled" 
            :href="href" 
            :pill="pill" 
            :uppercase="uppercase"
            :target="target"
            :isLoading="isLoading"
            :spinnerColor="spinnerColor"
            :spinnerSize="spinnerSize"
            :iconLeft="iconLeft"
            :iconLeftColor="iconLeftColor"
            :iconLeftColorMode="iconLeftColorMode"
            :iconLeftType="iconLeftType"
            :iconRight="iconRight"
            :iconRightColor="iconRightColor"
            :iconRightColorMode="iconRightColorMode"
            :iconRightType="iconRightType"
            :iconOnly="iconOnly"
        />`,
});

export const Primary = Template.bind({});

Primary.args = {
    title: "Button",
};

// export const PrimaryDisabled = Template.bind({});

// PrimaryDisabled.args = {
//     title: "Button",
//     disabled: true,
// };

// export const Link = Template.bind({});

// Link.args = {
//     title: "Link",
//     href: "#",
// };

// export const LinkDisabled = Template.bind({});

// LinkDisabled.args = {
//     title: "Link",
//     href: "#",
//     disabled: true,
// };

// export const Loading = Template.bind({});

// Loading.args = {
//     title: "Click me",
//     color: "dark",
//     isLoading: true,
// };

// export const LoadingContrast = Template.bind({});

// LoadingContrast.args = {
//     title: "I am loading...",
//     color: "info",
//     isLoading: true,
//     spinnerColor: "error",
//     spinnerSize: "x-small",
// };

// export const LeftIcon = Template.bind({});

// LeftIcon.args = {
//     title: "Button",
//     color: "secondary",
//     iconLeft: "default/search-15",
//     uppercase: false,
// };

// export const RightIcon = Template.bind({});

// RightIcon.args = {
//     title: "Button",
//     color: "dark",
//     iconRight: "default/arrow-decrease-14",
//     uppercase: false,
// };

// export const BothIcon = Template.bind({});

// BothIcon.args = {
//     title: "Details",
//     color: "white",
//     iconLeft: "default/arrow-rise-14",
//     iconLeftType: "stroke",
//     iconLeftColor: "info",
//     iconRight: "default/arrow-angle-right-14",
//     iconRightType: "stroke",
//     iconRightColor: "cm",
//     uppercase: true,
// };

// BothIcon.parameters = {
//     backgrounds: { default: "ash" },
// };

// export const OnlyIcon = Template.bind({});

// OnlyIcon.args = {
//     color: "info",
//     iconLeft: "default/information-20",
//     iconOnly: true,
// };

// export const ColorMode = Template.bind({});

// ColorMode.args = {
//     title: "Details",
//     color: "btn-color",
//     iconLeft: "default/information-20",
//     iconLeftColorMode: "bg-4-color",
// };
