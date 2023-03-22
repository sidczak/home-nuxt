import CmCollapse from "@components/clickmeeting/atoms/CmCollapse.vue";
import CmCard from "@components/clickmeeting/organisms/CmCard";
import CmCardHeader from "@components/clickmeeting/atoms/CmCardHeader";
import CmCardBody from "@components/clickmeeting/atoms/CmCardBody";

export default {
    title: "Atoms/CmCollapse",
    component: CmCollapse,
    argTypes: {},
};

const Template = (args, { argTypes }) => ({
    components: { CmCollapse, CmCard },
    props: Object.keys(argTypes),
    template: `<div>
            <b-button v-cm-toggle="'collapse'">Toggle Collapse</b-button>
            <CmCollapse id="collapse" class="mt-2" :visible="visible" :tag="tag"> 
                <CmCard>
                    <div>Collapse contents Here</div>
                </CmCard>
            </CmCollapse>
        </div>`,
});

export const Primary = Template.bind({});
Primary.args = {
    tag: "div",
    visible: false,
};

const TemplateVisible = (args, { argTypes }) => ({
    components: { CmCollapse, CmCard },
    props: Object.keys(argTypes),
    template: `<div>
            <b-button v-cm-toggle="'collapse'">Toggle Collapse</b-button>
            <b-button v-cm-toggle="'collapse'">Toggle Collapse</b-button>
            <CmCollapse id="collapse" class="mt-2" :visible="visible" :tag="tag">
                <CmCard>
                    <div>I am collapsible content!</div>
                </CmCard>
            </CmCollapse>
        </div>`,
});

export const InitialVisibility = TemplateVisible.bind({});
InitialVisibility.args = {
    tag: "div",
    visible: true,
};

const TemplateModel = (args, { argTypes }) => ({
    components: { CmCollapse, CmCard },
    props: Object.keys(argTypes),
    data() {
        return {
            visible: false,
            open: false,
        };
    },
    template: `<div>
            <b-button v-cm-toggle="'collapse-1'">Toggle Collapse {{visible}}</b-button>
            <CmCollapse id="collapse-1" v-model="visible" :tag="tag" class="mt-2">
                <CmCard> 
                    <div>I should start visible!</div>
                </CmCard>
            </CmCollapse>
            <hr/>
            <b-button v-cm-toggle="'collapse-2'">Toggle Collapse {{open}}</b-button>
            <CmCollapse id="collapse-2" v-model="open" :tag="tag" class="mt-2">
                <CmCard>
                    <div>I should start open!</div>
                </CmCard>
            </CmCollapse>
        </div>`,
});

export const Model = TemplateModel.bind({});
Model.args = {
    tag: "div",
};

const TemplateAccordion = (args, { argTypes }) => ({
    components: {
        CmCollapse,
        CmCard,
        CmCardHeader,
        CmCardBody,
    },
    props: Object.keys(argTypes),
    template: `<div class="accordion">
            <CmCard no-body>
                <CmCardHeader class="p-1">
                    <b-button v-cm-toggle="'accordion-1'" class="btn-block">Accordion 1</b-button>
                </CmCardHeader>
                <CmCollapse id="accordion-1" visible accordion="my-accordion">
                    <CmCardBody>
                        <div>I start opened because <code>visible</code> is <code>true</code></div>
                        <div>I am collapsible content accordion-1!</div>
                    </CmCardBody>
                </CmCollapse>
            </CmCard>
            <CmCard no-body>
                <CmCardHeader class="p-1">
                    <b-button v-cm-toggle="'accordion-2'" class="btn-block">Accordion 2</b-button>
                </CmCardHeader>
                <CmCollapse id="accordion-2" accordion="my-accordion">
                    <CmCardBody>
                        <div>I am collapsible content accordion-2!</div>
                    </CmCardBody>
                </CmCollapse>
            </CmCard>
            <CmCard no-body>
                <CmCardHeader class="p-1">
                    <b-button v-cm-toggle="'accordion-3'" class="btn-block">Accordion 3</b-button>
                </CmCardHeader>
                <CmCollapse id="accordion-3" accordion="my-accordion">
                    <CmCardBody>
                        <div>I am collapsible content accordion-3!</div>
                    </CmCardBody>
                </CmCollapse>
            </CmCard>
        </div>`,
});

export const Accordion = TemplateAccordion.bind({});

Accordion.args = {};

const TemplateNavbar = (args, { argTypes }) => ({
    components: {
        CmCollapse,
    },
    props: Object.keys(argTypes),
    template: `<div class="accordion">
            <b-navbar toggleable="lg" type="dark" variant="info">
                <b-navbar-brand href="#">NavBar</b-navbar-brand>
                <b-navbar-toggle v-cm-toggle="'nav-collapse'"></b-navbar-toggle>
                <CmCollapse id="nav-collapse" isNav>
                    <b-navbar-nav>
                        <b-nav-item href="#">Link</b-nav-item>
                        <b-nav-item href="#" disabled>Disabled</b-nav-item>
                    </b-navbar-nav>
                </CmCollapse>
            </b-navbar>
        </div>`,
});

export const Navbar = TemplateNavbar.bind({});

Navbar.args = {};
