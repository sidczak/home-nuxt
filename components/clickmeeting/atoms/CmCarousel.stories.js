import CmCarousel from "./CmCarousel";
import CmCarouselSlide from "./CmCarouselSlide";
// import { colorsNames } from "@helpers/exportedColors";

export default {
    title: "Atoms/CmCarousel",
    component: CmCarousel,
    argTypes: {
        // backgroundColor: {
        //     control: {
        //         type: "select",
        //         options: colorsNames,
        //     },
        // },
    },
};

const Template = (args, { argTypes }) => ({
    components: { CmCarousel },
    props: Object.keys(argTypes),
    template: `<CmCarousel
            :controls="controls"
            :indicators="indicators"
            :fade="fade"
            :backgroundColor="backgroundColor"
            :intervalDelay="intervalDelay"
            :pauseOnHover="pauseOnHover"
            :items="items"
        />`,
});

export const Primary = Template.bind({});

Primary.args = {
    controls: true,
    indicators: true,
    items: [
        {
            imgSrc: "https://picsum.photos/1024/480/?image=52",
            caption: "Slide 1",
            componentSlug: "slide1",
            text: "Lorem ipsum dolor sit amet",
        },
        {
            imgSrc: "https://picsum.photos/1024/480/?image=54",
            caption: "Slide 2",
            componentSlug: "slide2",
            text: "Lorem ipsum dolor sit amet",
        },
        {
            imgSrc: "https://picsum.photos/1024/480/?image=58",
            caption: "Slide 3",
            componentSlug: "slide3",
            text: "Lorem ipsum dolor sit amet",
        },
    ],
};

const TemplateEmitValue = (args, { argTypes }) => ({
    components: { CmCarousel },
    props: Object.keys(argTypes),
    methods: {
        onInput(value) {
            console.log("This is emmited value: ", value);
        },
    },
    template: `<CmCarousel
            :controls="controls"
            :indicators="indicators"
            :fade="fade"
            :backgroundColor="backgroundColor"
            :intervalDelay="intervalDelay"
            :pauseOnHover="pauseOnHover"
            :items="items"
            @input="onInput"
        />`,
});

export const EmitValue = TemplateEmitValue.bind({});

EmitValue.args = {
    controls: true,
    indicators: true,
    items: [
        {
            imgSrc: "https://picsum.photos/1024/480/?image=52",
            caption: "Slide 1",
            componentSlug: "slide1",
            text: "Lorem ipsum dolor sit amet",
        },
        {
            imgSrc: "https://picsum.photos/1024/480/?image=54",
            caption: "Slide 2",
            componentSlug: "slide2",
            text: "Lorem ipsum dolor sit amet",
        },
        {
            imgSrc: "https://picsum.photos/1024/480/?image=58",
            caption: "Slide 3",
            componentSlug: "slide3",
            text: "Lorem ipsum dolor sit amet",
        },
    ],
};

const TemplateFilledSlots = (args, { argTypes }) => ({
    components: { CmCarousel, CmCarouselSlide },
    props: Object.keys(argTypes),
    template: `<CmCarousel
            :id="id"
            :controls="controls"
            :indicators="indicators"
            :fade="fade"
            :backgroundColor="backgroundColor"
            :intervalDelay="intervalDelay"
            :pauseOnHover="pauseOnHover"
            :items="items"
        >
            <template #slide1>
                <CmCarouselSlide caption='Slide 1' text='Lorem ipsum dolor sit amet' imgSrc='https://picsum.photos/1024/480/?image=52' />
            </template>
            <template #slide2>
                <CmCarouselSlide caption='Slide 2' text='Lorem ipsum dolor sit amet' imgSrc='https://picsum.photos/1024/480/?image=54' />
            </template>
            <template #slide3>
                <div class="container">
                    <div class="d-flex align-items-center h-100">
                        <div>
                            <h3>Lorem ipsum dolor sit amet</h3>
                            <p>Consectetur adipiscing elit. Vivamus tortor sapien, suscipit vel est fermentum, cursus elementum purus.</p>
                        </div>
                        <div>
                            <img src='https://picsum.photos/1024/480/?image=58' />
                        </div>
                    </div>
                </div>
            </template>
            <template #slide4>
                <img class="img-fluid w-100 d-block" src='https://picsum.photos/1024/480/?image=55' />
            </template>
        </CmCarousel>
        `,
});

export const FilledSlots = TemplateFilledSlots.bind({});

FilledSlots.args = {
    backgroundColor: "light",
    controls: true,
    indicators: true,
    items: [
        { componentSlug: "slide1" },
        { componentSlug: "slide2" },
        { componentSlug: "slide3" },
        { componentSlug: "slide4" },
    ],
};
