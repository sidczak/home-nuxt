import Section from "../components/common/Section.vue";
import { mount } from "@vue/test-utils";
import { awaitNTimes, getTree } from "./utils";

import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
Vue.use(BootstrapVue);

describe("Section", () => {
    it("It completed props", async () => {
        const wrapper = mount(Section, {
            propsData: {
                title: "title",
                subtitle: "subtitle",
            },
        });
        const tree = getTree(wrapper.html());
        expect(tree).toMatchSnapshot();
    });

    it("It completed props2", async () => {
        const wrapper = mount(Section, {
            propsData: {
                title: "title2",
                subtitle: "subtitle2",
            },
        });
        const tree = getTree(wrapper.html());
        expect(tree).toMatchSnapshot();
    });
});
